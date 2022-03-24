import {useLazyQuery, useQuery} from '@apollo/client'
import React from 'react'
import {
   Image,
   SafeAreaView,
   ScrollView,
   TouchableOpacity,
   TouchableWithoutFeedback,
   useColorScheme,
   View,
   // NativeModules
} from 'react-native'
import Toast from 'react-native-toast-message'
import Colors from '../../colors'
import Text from '../../components/Text'
import {QUERY_MARKET} from '../../graphql/Market/queries'

const Market = ({
   navigation,
   route: {
      params: {id},
   },
}) => {
   const isDarkMode = useColorScheme() === 'dark'
   const ColorSheet = isDarkMode ? Colors.dark : Colors.light

   const [doQuery, {data, loading, error}] = useLazyQuery(QUERY_MARKET)

   React.useEffect(() => {
      doQuery({
         variables: {id},
         onComplete: res => {
            console.log(res)
         },
      })
   }, [])

   return (
      <SafeAreaView style={{height: '100%', justifyContent: 'flex-end'}}>
         <TouchableOpacity
            activeOpacity={1}
            style={{flex: 1}}
            onPress={() => {
               navigation.pop()
            }}
         />
         <View
            style={{
               backgroundColor: ColorSheet.modalBackground,
               paddingHorizontal: 16,
               paddingVertical: 16,
               borderTopLeftRadius: 16,
               borderTopRightRadius: 16,
               height: '70%',
            }}>
            <ScrollView>
               {loading ? null : (
                  <>
                     <Text>{data?.findUniquePoint?.address}</Text>
                     <Text />
                     <Text>{data?.findUniquePoint?.owner}</Text>
                     <Text />
                     {data?.findManyPosition?.map(e => {
                        return (
                           <View>
                              <Text>{e.name}</Text>
                              <Text>{e.checkouts[0].price} руб</Text>
                              <Text />
                           </View>
                        )
                     })}
                  </>
               )}
            </ScrollView>
         </View>
      </SafeAreaView>
   )
}

export default Market
