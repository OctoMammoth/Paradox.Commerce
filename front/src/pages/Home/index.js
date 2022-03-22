import React from 'react'

import {
   SafeAreaView,
   StyleSheet,
   useColorScheme,
   View,
   TouchableOpacity,
} from 'react-native'
import Toast from 'react-native-toast-message'

import Colors from '../../colors'
import Button from '../../components/Button'
import Icon from '../../components/Icon'
import Text from '../../components/Text'

const Home = ({navigation}) => {
   const isDarkMode = useColorScheme() === 'dark'
   const ColorSheet = isDarkMode ? Colors.dark : Colors.light
   const backgroundStyle = {
      backgroundColor: ColorSheet.backgroundColor,
   }

   return (
      <SafeAreaView style={[backgroundStyle, styles.wrapper]}>
         <View>
            <Text>Home Screen</Text>
            <TouchableOpacity
               style={{
                  backgroundColor: ColorSheet.buttonBackgroundColor,
                  marginHorizontal: 16,
                  marginTop: 8,
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  alignItems: 'center',
               }}
               onPress={() => {
                  Toast.show({
                     type: 'success',
                     text1: 'Hello',
                     text2: 'This is some something 👋',
                  })
               }}>
               <Text>Toast</Text>
            </TouchableOpacity>
            <Button style={{marginTop: 32}} onPress={() => {
               navigation.push("Camera")
            }}>Go to QR Reader</Button>
         </View>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      flex: 1,
   },
})

export default Home
