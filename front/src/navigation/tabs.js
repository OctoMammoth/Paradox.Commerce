import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../pages/Home'
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme'
import Profile from '../pages/Profile'
import Icon from '../components/Icon'
import Map from '../pages/Map'

const Tab = createBottomTabNavigator()

export const MainTabs = () => {
   const isDarkMode = useColorScheme() === 'dark'
   const backgroundColor = isDarkMode ? '#333333' : 'white'
   const textColor = isDarkMode ? 'white' : 'black'

   return (
      <Tab.Navigator
         screenOptions={{
            headerStyle: {
               backgroundColor,
            },
            headerTitleStyle: {
               color: textColor,
            },
            tabBarStyle: {
               backgroundColor,
               borderTopWidth: 0,
               height: 50 + 8,
               paddingTop: 4,
               paddingBottom: 4
            },
            headerShown: false,
         }}>
         <Tab.Screen
            name="Home"
            component={Home}
            options={{
               tabBarIcon: ({color}) => {
                  return <Icon name="Home" size={24} color={color} />
               },
               tabBarLabel: "Главная"
            }}
         />
         <Tab.Screen
            name='Map'
            component={Map}
            options={{
               tabBarIcon: ({color}) => {
                  return <Icon name="Map" size={24} color={color} />
               },
               tabBarLabel: "Карта"
            }}
         />
         <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
               tabBarIcon: ({color}) => {
                  return <Icon name="Profile" size={24} color={color} />
               },
               tabBarLabel: "Профиль"
            }}
         />
      </Tab.Navigator>
   )
}
