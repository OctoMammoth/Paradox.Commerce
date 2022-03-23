import React from 'react'
import {SafeAreaView, useColorScheme, View} from 'react-native'
import Colors from '../../colors'
import Button from '../../components/Button'
import Text from '../../components/Text'
import TextInput from '../../components/TextInput'

const SignIn = ({navigation}) => {
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
         <Text style={{fontWeight: '700', fontSize: 24}}>Вход</Text>
         <Text style={{opacity: .5, marginTop: 8}}>Войдите сейчас, чтобы отслеживать все свои расходы и доходы на месте!</Text>
         <TextInput style={{marginTop: 32}} title='Логин' placeholder='ivan'/>
         {/* <TextInput style={{marginTop: 12}} title='Почта' placeholder='ivan@mail.ru' keyboardType='email-address'/> */}
         <TextInput style={{marginTop: 12}} title='Пароль' placeholder='********' secureTextEntry autoCorrect={false}/>
         <View style={{flex: 1}}/>
         <Button onPress={() => {
				navigation.reset({
					index: 0,
					routes: [{name: 'UserHome'}]
			  })
			}}>
         ПРОДОЛЖИТЬ
         </Button>
         <Button onPress={() => {navigation.replace('SignUp')}} fill={false} stroke={false} shadow={false}>
			Еще нет аккаунта? Зарегистрироваться
         </Button>
      </SafeAreaView>
   )
}

export default SignIn
