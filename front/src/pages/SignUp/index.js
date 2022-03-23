import React from 'react'
import {SafeAreaView, useColorScheme, View} from 'react-native'
import Colors from '../../colors'
import Button from '../../components/Button'
import Text from '../../components/Text'
import TextInput from '../../components/TextInput'

const SignUp = ({navigation}) => {
   const isDarkMode = useColorScheme() === 'dark'
   const ColorSheet = isDarkMode ? Colors.dark : Colors.light

   return (
      <SafeAreaView
         style={{
            backgroundColor: ColorSheet.backgroundColor,
            height: '100%',
            paddingHorizontal: 16,
            paddingVertical: 24,
            paddingTop: 64
         }}>
         <Text style={{fontWeight: '700', fontSize: 24}}>Регистрация</Text>
         <Text style={{opacity: .5, marginTop: 8}}>Создайте учетную запись, чтобы получить доступ ко всем функциям Paradox!</Text>
         <TextInput style={{marginTop: 32}} title='Логин' placeholder='ivan'/>
         <TextInput style={{marginTop: 12}} title='Почта' placeholder='ivan@mail.ru' keyboardType='email-address'/>
         <TextInput style={{marginTop: 12}} title='Пароль' placeholder='********' secureTextEntry autoCorrect={false}/>
         <View style={{flex: 1}}/>
         <Button onPress={() => {navigation.replace('SelectRole')}}>
         ПРОДОЛЖИТЬ
         </Button>
         <Button onPress={() => {navigation.replace('SignIn')}} fill={false} stroke={false} shadow={false}>
            Уже есть аккаунт? Войти
         </Button>
      </SafeAreaView>
   )
}

export default SignUp
