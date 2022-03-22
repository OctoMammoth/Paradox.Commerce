import React from 'react'
import {BaseToast, ErrorToast} from 'react-native-toast-message'
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme'
import Colors from './colors'

const toastConfig = {
   success: props => {
      const schema = useColorScheme()
      return (
         <BaseToast
            {...props}
            style={{
               borderLeftColor: '#28a745',
               backgroundColor: Colors[schema].toast,
            }}
            contentContainerStyle={{
               backgroundColor: Colors[schema].toast,
            }}
            text1Style={{
               color: Colors[schema].textColor,
            }}
         />
      )
   },
   error: props => {
      const schema = useColorScheme()
      return (
         <ErrorToast
            {...props}
            style={{
               borderLeftColor: '#ff0000',
               backgroundColor: Colors[schema].toast,
            }}
            contentContainerStyle={{
               backgroundColor: Colors[schema].toast,
               borderTopRightRadius: 4,
               borderBottomRightRadius: 4,
            }}
            text1Style={{
               color: Colors[schema].textColor,
            }}
         />
      )
   },
}

export default toastConfig
