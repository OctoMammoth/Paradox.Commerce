import React from 'react'
import {
   SafeAreaView,
   StyleSheet,
   TouchableOpacity,
   useColorScheme,
   View,
} from 'react-native'
import {RNCamera} from 'react-native-camera'
import QRCodeScanner from 'react-native-qrcode-scanner'
import Toast from 'react-native-toast-message'
import Colors from '../../colors'
import Svg, {Path} from 'react-native-svg'
import Button from '../../components/Button'
import Text from '../../components/Text'
import QRSample from './QRSample'

const Camera = ({navigation}) => {
   const isDarkMode = useColorScheme() === 'dark'
   const ColorSheet = isDarkMode ? Colors.dark : Colors.light

   const onSuccess = e => {
      const {data} = e
      let jsonData = {}
      data.split('&').map(e => {
         let object = e.split('=')
         jsonData[object[0]] = object[1]
      })
      if (
         !jsonData.fn &&
         !jsonData.fp &&
         !jsonData.i &&
         !jsonData.n &&
         !jsonData.s &&
         !jsonData.t
      ) {
         Toast.show({
            type: 'error',
            text1: 'Произошла ошибка',
            text2: 'Неправильный QR-код',
         })
         return
      } else navigation.push('Captcha', {jsonData})
   }
   return (
      <SafeAreaView
         style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            backgroundColor: ColorSheet.backgroundColor,
         }}>
         <QRCodeScanner
            onRead={onSuccess}
            reactivate
            reactivateTimeout={5000}
            cameraStyle={{height: '100%'}}
         />
         <SafeAreaView
            style={{
               position: 'absolute',
               width: '100%',
               height: '100%',
               alignItems: 'center',
            }}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
               <Svg
                  width="200"
                  height="201"
                  viewBox="0 0 200 201"
                  fill="none">
                  <Path
                     fillRule="evenodd"
                     clipRule="evenodd"
                     d="M172.737 4.64261V0.451996L190 0.452003C195.523 0.452003 200 4.92916 200 10.452V27.715H195.809V12.6426C195.809 8.22433 192.228 4.64261 187.809 4.64261H172.737ZM27.2631 4.64261H12.1907C7.77239 4.64261 4.19066 8.22434 4.19066 12.6426V27.715H0V10.452C0 4.92916 4.47715 0.452003 10 0.452003L27.2631 0.451989V4.64261ZM27.2631 196.261V200.452H10C4.47716 200.452 0 195.975 0 190.452V173.189H4.19066V188.261C4.19066 192.68 7.77239 196.261 12.1907 196.261H27.2631ZM172.737 200.452V196.261H187.809C192.228 196.261 195.809 192.68 195.809 188.261V173.189H200V190.452C200 195.975 195.523 200.452 190 200.452H172.737Z"
                     fill="white"
                  />
               </Svg>
            </View>
            <View style={{backgroundColor: "#191c23", alignItems: 'center', padding: 20, borderRadius: 10, elevation:2, marginHorizontal: 16, marginVertical: 16}}>
               <Text style={{fontSize: 18, fontWeight: '700', marginBottom: 8, textAlign:'center', color: 'white'}}>Отсканируйте QR-код</Text>
               <Text style={{textAlign:'center', color: '#8F8F8F'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
               <View style={{marginTop: 8}}>
                  <QRSample/>
               </View>
            </View>
            {/* <Button
               style={{width: '90%', marginBottom: 24}}
               onPress={() => {
						//t=20220321T1521&s=983.00&fn=9960440300550955&i=44377&fp=910249113&n=1
                  navigation.push('Captcha', {
                     jsonData: {
                        fn: '9960440300550955',
                        fp: '910249113',
                        i: '44377',
                        n: '1',
                        s: '983.00',
                        t: '20220321T1521',
                     },
                  })
               }}>
               Тестовый чек
            </Button> */}
         </SafeAreaView>
      </SafeAreaView>
   )
}

export default Camera
