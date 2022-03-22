import React from 'react'

import {
   SafeAreaView,
   StyleSheet,
   useColorScheme,
   View,
	TouchableOpacity
} from 'react-native'
import Colors from '../../colors'
import Button from '../../components/Button'
import Text from '../../components/Text'

const Profile = ({navigation}) => {
   const isDarkMode = useColorScheme() === 'dark'
   const ColorSheet = isDarkMode ? Colors.dark : Colors.light
   const backgroundStyle = {
      backgroundColor: ColorSheet.backgroundColor,
   }

   return (
      <SafeAreaView style={[backgroundStyle, styles.wrapper]}>
         <View>
            <Text>Profile Screen</Text>
            
				<Button
					onPress={() => {
                  navigation.push('SignUp')
					}}
				>
					Go to initial page
				</Button>
         </View>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      flex: 1,
   },
})

export default Profile
