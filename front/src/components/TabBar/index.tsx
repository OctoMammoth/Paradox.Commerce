import React from 'react'
import {TouchableOpacity, View} from 'react-native'
import Svg, {Circle} from 'react-native-svg'
import Icon from '../Icon'
import Text from '../Text'

type Props = {
   active: 'home' | 'search' | 'fav' | 'profile' | 'null'
   navigation: any
}

const TabBar = ({active = 'null', navigation}: Props) => {
   return (
      <View
         style={{
            flexDirection: 'row',
            backgroundColor: '#191C23',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginHorizontal: 16,
            paddingVertical: 10,
            marginVertical: 12,
            borderRadius: 10,
            paddingHorizontal: 16, 
				elevation:10
         }}>
         <TouchableOpacity
            onPress={() => {
               if (active !== 'home')
                  navigation.reset({
                     index: 0,
                     routes: [{name: 'UserHome'}],
                  })
            }}>
            <Icon
               name={'Home'}
               size={18}
               color={active === 'home' ? 'white' : '#323846'}
            />
         </TouchableOpacity>
         <TouchableOpacity
            onPress={() => {
               if (active !== 'search')
                  navigation.reset({
                     index: 0,
                     routes: [{name: 'UserHome'}],
                  })
            }}>
            <Icon
               name={'Search'}
               size={18}
               color={active === 'search' ? 'white' : '#323846'}
            />
         </TouchableOpacity>

         <TouchableOpacity
				onPress={() => {
					navigation.push('Camera')
				}}
            style={{
               height: 36,
               alignItems: 'center',
               flexDirection: 'row',
               backgroundColor: '#323846',
               borderRadius: 35,
               paddingLeft: 16,
               paddingRight: 5,
            }}>
            <Text style={{marginRight: 8, color: 'white'}}>Scan&QR</Text>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
               <Circle
                  cx="12"
                  cy="12"
                  r="10.5"
                  stroke="#3367EF"
                  strokeWidth="3"
               />
               <Circle cx="12" cy="12" r="7" fill="white" />
            </Svg>
         </TouchableOpacity>
         <TouchableOpacity
            onPress={() => {
               if (active !== 'fav')
                  navigation.reset({
                     index: 0,
                     routes: [{name: 'Favorite'}],
                  })
            }}>
            <Icon
               name={'Heart'}
               size={18}
               color={active === 'fav' ? 'white' : '#323846'}
            />
         </TouchableOpacity>
         <TouchableOpacity
            onPress={() => {
               if (active !== 'profile')
                  navigation.reset({
                     index: 0,
                     routes: [{name: 'UserProfile'}],
                  })
            }}>
            <Icon
               name={'Profile'}
               size={18}
               color={active === 'profile' ? 'white' : '#323846'}
            />
         </TouchableOpacity>
      </View>
   )
}

export default TabBar
