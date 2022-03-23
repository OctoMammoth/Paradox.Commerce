import React from 'react'
import {SafeAreaView, useColorScheme, View} from 'react-native'
import Colors from '../../colors'
import TabBar from '../../components/TabBar'
import Text from '../../components/Text'
import FavIllustration from './illustration'
import SVGPoint from './point'
import SVGRoute from './route'

const Favorite = ({navigation}) => {
   const isDarkMode = useColorScheme() === 'dark'
   const ColorSheet = isDarkMode ? Colors.dark : Colors.light
   return (
      <SafeAreaView
         style={{
            backgroundColor: ColorSheet.backgroundColor,
            height: '100%',
         }}>
         <View style={{position: 'absolute', width: '100%', height: '100%'}}>
            <SVGPoint style={{position: 'absolute',right: -6, top: 32}} />
            <SVGRoute style={{position: 'absolute',left: -4, bottom: 80}} />
         </View>
         <View style={{height: '100%'}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
                <FavIllustration style={{alignSelf: 'center', marginBottom: 36}}/>
                <Text style={{fontSize: 24, fontWeight: '700', alignSelf: 'center', textAlign: 'center', marginBottom: 4}}>Избранное</Text>
                <Text style={{alignSelf: 'center', opacity: .5, textAlign: 'center'}}>{"История заказов, оплата бонусами\n и многое другое"}</Text>
            </View>
            <TabBar active="fav" navigation={navigation}></TabBar>
         </View>
      </SafeAreaView>
   )
}

export default Favorite
