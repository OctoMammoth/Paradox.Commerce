import axios from 'axios'
import React from 'react'
import {
   Image,
   SafeAreaView,
   TouchableOpacity,
   TouchableWithoutFeedback,
   useColorScheme,
   View,
   // NativeModules
} from 'react-native'
import Toast from 'react-native-toast-message'
import Colors from '../../colors'
import Button from '../../components/Button'
import Text from '../../components/Text'
import TextInput from '../../components/TextInput'

const Captcha = ({
   navigation,
   route: {
      params: {jsonData},
   },
}) => {
   const isDarkMode = useColorScheme() === 'dark'
   const ColorSheet = isDarkMode ? Colors.dark : Colors.light

   const [disabled, setDisabled] = React.useState(false)
   const [image, setImage] = React.useState(new Date())
   const [captcha, setCaptcha] = React.useState()

   const parseTime = t => {
      //"2022-03-21T15:21:00.000Z"
      return (
         t[0] +
         t[1] +
         t[2] +
         t[3] +
         '-' +
         t[4] +
         t[5] +
         '-' +
         t[6] +
         t[7] +
         'T' +
         t[9] +
         t[10] +
         ':' +
         t[11] +
         t[12] +
         ':00.000Z'
      )
   }

   const onSubmit = async () => {
      setDisabled(true)
      const data = await fetch(
         'https://check.ofd.ru/Document/FetchReceiptFromFns',
         {
            method: 'POST',
            body: JSON.stringify({
               TotalSum: parseFloat(jsonData.s) * 100,
               FnNumber: jsonData.fn,
               ReceiptOperationType: jsonData.n,
               DocNumber: jsonData.i,
               DocFiscalSign: jsonData.fp,
               DocDateTime: parseTime(jsonData.t),
               Captcha: captcha,
            }),
            headers: {
               'Content-Type': 'application/json',
            },
         },
      )
      if (data.status === 400) {
         setDisabled(false)
         setImage(new Date())
         Toast.show({
            type: 'error',
            text1: 'Произошла ошибка',
            text2: 'Вы не прошли Captcha',
         })
      }
      if (data.status === 200) {
         setDisabled(false)
         navigation.push('Scraping', {jsonData})
      }
   }

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
            }}>
               <Text style={{fontSize: 24, fontWeight: '700'}}>
                  Captcha
               </Text>
               <Text style={{opacity: .5, marginBottom: 16}}>
               Введите код с картинки
               </Text>
            <Image
               source={{
                  uri: 'https://check.ofd.ru/api/captcha/common' + '?' + image,
               }}
               style={{height: 100, width: '100%', borderRadius: 16, backgroundColor: 'rgba(0,0,0,.1)'}}
            />
            <Button
               fill={false}
               stroke={false}
               // style={{marginTop: 24}}
               textStyle={{textAlign: 'left', fontWeight: '400'}}
               onPress={() => {
                  setImage(new Date())
               }}>
               Получить новый код
            </Button>
            <TextInput
               style={{marginTop: 8}}
               placeholder={'Код'}
               state={captcha}
               setState={setCaptcha}
            />
            <Button
               disabled={disabled}
               style={{marginTop: 24}}
               onPress={onSubmit}>
               Отправить
            </Button>
         </View>
      </SafeAreaView>
   )
}

export default Captcha
