import React from 'react'
import {SafeAreaView, useColorScheme, View} from 'react-native'
import Colors from '../../colors'
import Button from '../../components/Button'
import Text from '../../components/Text'
import TextInput from '../../components/TextInput'
import {YaMap, CameraPosition, Marker} from 'react-native-yamap'
import type {NativeStackScreenProps} from '@react-navigation/native-stack'
import type {RootStackParamList} from '../../navigation/rootStackParamList'
import TabBar from '../../components/TabBar'
import { useLazyQuery } from '@apollo/client'
import { FIND_POINTS_LL } from '../../graphql/Point/queries'

type Props = NativeStackScreenProps<RootStackParamList, 'UserHome'>

const UserHome = ({navigation}: Props) => {
   const isDarkMode = useColorScheme() === 'dark'
   const ColorSheet = isDarkMode ? Colors.dark : Colors.light

   const map = React.createRef<YaMap>()

   const getCurrentPosition = () => {
      return new Promise<CameraPosition>(resolve => {
         if (map.current) {
            map.current.getCameraPosition(position => {
               resolve(position)
            })
         }
      })
   }

   const [getPoints, {loading, data, error}] = useLazyQuery(FIND_POINTS_LL)


   //onInit
   React.useEffect(() => {
      map.current?.setCenter({lon: 129.732663, lat: 62.028103})
      map.current?.setZoom(13)
      getPoints()
   }, [])

   return (
      <SafeAreaView
         style={{
            backgroundColor: ColorSheet.backgroundColor,
            height: '100%',
         }}>
         <YaMap
            ref={map}
            style={{position: 'absolute', height: '100%', width: '100%'}}
            showUserPosition
            nightMode={isDarkMode}>
            {data?.findManyPoint?.map(({lat, lng, id}: any) => {
               console.log(data)
               const latlng = {lat, lon: lng}
               return <Marker point={latlng} source={{uri: "https://www.dropbox.com/s/07mtzkbw40phvvg/Component%201.png?dl=1"}} onPress={() => {
                  navigation.push('Market', {id})
               }}/>
            })}
         </YaMap>
         <View style={{height: '100%', justifyContent: 'flex-end'}}>
            <TabBar active="home" navigation={navigation} />
         </View>
      </SafeAreaView>
   )
}

export default UserHome
