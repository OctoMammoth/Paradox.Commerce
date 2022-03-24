import React from 'react'
import {SafeAreaView, TouchableOpacity, useColorScheme, View} from 'react-native'
import Colors from '../../colors'
import Icon from '../../components/Icon'
import TabBar from '../../components/TabBar'
import Text from '../../components/Text'
import SVGPoint from '../Favorite/point'
import SVGRoute from '../Favorite/route'

const UserProfile = ({navigation}) => {
   const isDarkMode = useColorScheme() === 'dark'
   const ColorSheet = isDarkMode ? Colors.dark : Colors.light
   return (
      <SafeAreaView
         style={{
            backgroundColor: ColorSheet.backgroundColor,
            height: '100%',
         }}>
         <View style={{position: 'absolute', width: '100%', height: '100%'}}>
            <SVGPoint style={{position: 'absolute', right: -6, top: 32}} />
            <SVGRoute style={{position: 'absolute', left: -4, bottom: 80}} />
         </View>
         <View style={{height: '100%'}}>
            <View style={{flex: 1}}>
               <View
                  style={{
                     flexDirection: 'row',
                     marginHorizontal: 16,
                     marginTop: 28,
                  }}>
                  <TouchableOpacity
                     onPress={() => {navigation.push("Main")}}
                     style={{
                        backgroundColor: ColorSheet.modalBackground,
                        width: 96,
                        height: 96,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 17,
                     }}>
                     <Text style={{fontWeight: '700', fontSize: 32}}>ЕН</Text>
                  </TouchableOpacity>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                     <Text style={{fontSize: 18, fontWeight: '700'}}>
                        Егоров Никита
                     </Text>
                     <Text style={{opacity: 0.5}}>egorov.d.nikita@mail.ru</Text>
                     <Text>покупатель</Text>
                  </View>
               </View>
               <View style={{margin: 24}}>
                  <View
                     style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 16,
                     }}>
                     <Icon
                        name="Settings"
                        size={24}
                        color={ColorSheet.textColor}
                     />
                     <Text style={{fontSize: 18, marginLeft: 8}}>
                        Личные данные
                     </Text>
                  </View>
                  <View
                     style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 16,
                     }}>
                     <Icon
                        name="Comment"
                        size={24}
                        color={ColorSheet.textColor}
                     />
                     <Text style={{fontSize: 18, marginLeft: 8}}>
                        Вопросы и ответы
                     </Text>
                  </View>
                  <View
                     style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 16,
                     }}>
                     <Icon
                        name="Thumbs-up-1"
                        size={24}
                        color={ColorSheet.textColor}
                     />
                     <Text style={{fontSize: 18, marginLeft: 8}}>
                        О приложении
                     </Text>
                  </View>
               </View>
            </View>
            <TabBar active="profile" navigation={navigation}></TabBar>
         </View>
      </SafeAreaView>
   )
}

export default UserProfile
