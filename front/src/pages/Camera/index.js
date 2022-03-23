import React from 'react'
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native'
import {RNCamera} from 'react-native-camera'
import QRCodeScanner from 'react-native-qrcode-scanner'
import Text from '../../components/Text'

const Camera = () => {
   const onSuccess = e => {
      const {data} = e
      let jsonData = {}
      data.split('&').map(e => {
         let object = e.split('=')
         jsonData[object[0]] = object[1]
      })
      
   }
   return (
      <SafeAreaView style={{justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#1f1f1f'}}>
         <QRCodeScanner onRead={onSuccess} />
      </SafeAreaView>
   )
}

export default Camera
