import React from 'react'
import {SafeAreaView, useColorScheme, View} from 'react-native'
import Colors from '../../colors'
import Button from '../../components/Button'
import Text from '../../components/Text'
import TextInput from '../../components/TextInput'
import {YaMap, CameraPosition} from 'react-native-yamap'
import type {NativeStackScreenProps} from '@react-navigation/native-stack'
import type {RootStackParamList} from '../../navigation/rootStackParamList'
import TabBar from '../../components/TabBar'

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

   //onInit
   React.useEffect(() => {
      map.current?.setCenter({lon: 129.732663, lat: 62.028103})
      map.current?.setZoom(13)
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
            nightMode={isDarkMode}></YaMap>
         <View style={{height: '100%', justifyContent: 'flex-end'}}>
            <TabBar active='home' navigation={navigation}/>
         </View>
      </SafeAreaView>
   )
}

export default UserHome
