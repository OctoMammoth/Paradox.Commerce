import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {MainTabs} from './tabs'

import Auth from '../pages/Auth'
import Camera from '../pages/Camera'
import Captcha from '../pages/Captcha'
import Colors from '../colors'
import Scraping from '../pages/Scraping'
import Splash from '../pages/Splash'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import SelectRole from '../pages/SelectRole'
import UserHome from '../pages/UserHome'
import { RootStackParamList } from './rootStackParamList'
import { useColorScheme } from 'react-native'
import Favorite from '../pages/Favorite'
import UserProfile from '../pages/UserProfile'
import Market from '../pages/Market'

const Stack = createNativeStackNavigator<RootStackParamList>()

export const RootStackNav = () => {
   const isDarkMode = useColorScheme() === 'dark'
   const ColorSheet = isDarkMode ? Colors.dark : Colors.light

   return (
      <Stack.Navigator
         screenOptions={{
            headerStyle: {
               backgroundColor: ColorSheet.backgroundColor,
            },
            headerShadowVisible: false,
            headerTitleStyle: {
               color: ColorSheet.textColor,
            },
            headerTitleAlign: 'center',
            headerTintColor: ColorSheet.textColor,
         }}>
         <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
         />
         <Stack.Screen
            name="Main"
            component={MainTabs}
            options={{headerShown: false}}
         />
         <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
         <Stack.Screen name="SelectRole" component={SelectRole} options={{headerShown: false}}/>
         <Stack.Screen name="UserHome" component={UserHome} options={{headerShown: false}}/>
         <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
         <Stack.Screen
            name="Camera"
            component={Camera}
            options={
               {
                  headerShown: false,
               }
            }
         />
         <Stack.Screen
            name="Favorite"
            component={Favorite}
            options={
               {
                  headerShown: false,
               }
            }
         />
         <Stack.Screen
            name="UserProfile"
            component={UserProfile}
            options={
               {
                  headerShown: false,
               }
            }
         />
         <Stack.Screen name="Auth" component={Auth} options={{headerShown: false}}/>
         <Stack.Screen
            name="Scraping"
            component={Scraping}
            options={{
               headerShown: false,
            }}
         />
         <Stack.Group
            screenOptions={{
               presentation: 'transparentModal',
               animation: 'fade_from_bottom',
               headerShown: false,
            }}>
            <Stack.Screen
               name="Captcha"
               component={Captcha}
               options={
                  {
                     // animation: 'slide_from_bottom'
                  }
               }
            />
            <Stack.Screen
               name="Market"
               component={Market}
               options={
                  {
                     // animation: 'slide_from_bottom'
                  }
               }
            />
         </Stack.Group>
      </Stack.Navigator>
   )
}
