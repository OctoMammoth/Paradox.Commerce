import React from 'react'
import {Text as TextComponent, TextStyle, useColorScheme} from 'react-native'
// import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme'
import Colors from '../../colors'

type Props = {
   children: any
   style?: TextStyle
}

const Text = ({children, style}: Props) => {
   const isDarkMode = useColorScheme() === 'dark'
   const ColorSheet = isDarkMode ? Colors.dark : Colors.light

   return (
      <TextComponent
         style={{
            fontFamily: Colors.font,
            color: ColorSheet.textColor,
            ...style,
         }}>
         {children}
      </TextComponent>
   )
}
export default Text
