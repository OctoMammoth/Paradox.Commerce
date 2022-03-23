import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme'
import { MainTabs } from './tabs'

import Login from '../pages/Login'
import Camera from '../pages/Camera'
import Captcha from '../pages/Captcha'

const Stack = createNativeStackNavigator()

export const RootStackNav = () => {
   const isDarkMode = useColorScheme() === 'dark'

   return (
      <Stack.Navigator
         screenOptions={{
            headerStyle: {
               backgroundColor: isDarkMode ? '#333333' : 'white',
            },
            headerTitleStyle: {
               color: isDarkMode ? 'white' : 'black',
            },
         }}>
         <Stack.Screen name="Main" component={MainTabs} options={{headerShown: false}} />
         <Stack.Screen name="SignIn" component={Login} />
         <Stack.Screen name="Camera" component={Camera} />
         <Stack.Screen name="SignUp" component={Login} />
         <Stack.Group screenOptions={{
            presentation: 'transparentModal',
            animation: 'fade_from_bottom'
         }}>
            <Stack.Screen name='Captcha' component={Captcha}/>
         </Stack.Group>
      </Stack.Navigator>
   )
}
