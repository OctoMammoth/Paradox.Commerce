import React from 'react'

import {SafeAreaView, useColorScheme, View} from 'react-native'

import Colors from '../../colors'
import Button from '../../components/Button'
import Text from '../../components/Text'
import Logo from '../Splash/logo'

const Auth = ({navigation}) => {
   const isDarkMode = useColorScheme() === 'dark'
   const ColorSheet = isDarkMode ? Colors.dark : Colors.light

   return (
      <SafeAreaView
         style={{backgroundColor: ColorSheet.backgroundColor, height: '100%', paddingHorizontal: 16, paddingVertical: 40}}>
         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Logo />
            <Text style={{textAlign: 'center', marginTop: 32, opacity: .3, marginHorizontal: 32}}>
            “Дизайн - это не то как предмет выглядит, а то, как он работает.”
            —  Стив Джобс
            </Text>
         </View>
         <Button onPress={() => {navigation.push('SignIn')}} style={{marginBottom: 16}}>ВОЙТИ</Button>
         <Button fill={false} onPress={() => {navigation.push('SignUp')}}>ЗАРЕГИСТРИРОВАТЬСЯ</Button>
      </SafeAreaView>
   )
}

export default Auth
