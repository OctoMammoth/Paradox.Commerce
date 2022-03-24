import React from 'react'
import {View, SafeAreaView, StyleSheet, useColorScheme} from 'react-native'
import {YaMap, CameraPosition} from 'react-native-yamap'
import Colors from '../../colors'
import Text from '../../components/Text'

const Map = () => {
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
      <SafeAreaView>
         <YaMap ref={map} style={{height: '100%'}} showUserPosition nightMode={isDarkMode}></YaMap>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      flex: 1,
   },
})

export default Map
