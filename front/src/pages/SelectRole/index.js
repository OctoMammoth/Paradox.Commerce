import React from 'react'
import {SafeAreaView, useColorScheme, View} from 'react-native'
import Toast from 'react-native-toast-message'
import Colors from '../../colors'
import Button from '../../components/Button'
import Text from '../../components/Text'
import TextInput from '../../components/TextInput'

const SelectRole = ({navigation}) => {
   const isDarkMode = useColorScheme() === 'dark'
   const ColorSheet = isDarkMode ? Colors.dark : Colors.light

   const [picked, setPick] = React.useState(0)


   
   const onSubmit = () => {
      switch (picked) {
         case 0:
            console.log(0)
            navigation.reset({
                index: 0,
                routes: [{name: 'UserHome'}]
            })
            break
         case 1:
            console.log(1)
            Toast.show({
                type: 'error',
                text1: 'Ошибка',
                text2: 'Тип аккаунта не доступен'
            })
            break
         case 2:
            console.log(2)
            Toast.show({
                type: 'error',
                text1: 'Ошибка',
                text2: 'Тип аккаунта не доступен'
            })
            break
      }
   }

   return (
      <SafeAreaView
         style={{
            backgroundColor: ColorSheet.backgroundColor,
            height: '100%',
            paddingHorizontal: 16,
            paddingVertical: 24,
            paddingTop: 64,
         }}>
         <View style={{flex: 1}} />
         <Text style={{fontWeight: '700', fontSize: 24}}>Тип аккаунта</Text>
         <Text style={{opacity: 0.5, marginTop: 8, marginBottom: 24}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         </Text>
         <Button
            style={{marginBottom: 8}}
            secondory={picked !== 0}
            onPress={() => {
               setPick(0)
            }}>
            Покупатель
         </Button>
         <Button
            style={{marginBottom: 8}}
            secondory={picked !== 1}
            onPress={() => {
               setPick(1)
            }}>
            Продавец
         </Button>
         <Button
            style={{marginBottom: 32}}
            secondory={picked !== 2}
            onPress={() => {
               setPick(2)
            }}>
            Поставщик
         </Button>
         <Button onPress={onSubmit} style={{paddingVertical: 16}}>Выбрать</Button>
      </SafeAreaView>
   )
}

export default SelectRole
