import React from 'react'
import {GestureResponderEvent, TextStyle, ViewStyle} from 'react-native'
import {TouchableOpacity, useColorScheme} from 'react-native'
import Colors from '../../colors'
import Text from '../Text'

type Props = {
   children: any
   style?: ViewStyle
   fill?: boolean
   stroke?: boolean
   disabled?: boolean
   shadow?: boolean
   onPress?: (event: GestureResponderEvent) => void,
   textStyle?: TextStyle
}

const Button = ({
   children,
   style,
   fill = true,
   stroke = true,
   disabled = false,
   shadow = false,
   onPress,
   textStyle,
}: Props) => {
   const isDarkMode = useColorScheme() === 'dark'
   const ColorSheet = isDarkMode ? Colors.dark : Colors.light

   return (
      <TouchableOpacity
         disabled={disabled}
         onPress={onPress}
         style={{
            backgroundColor: fill
               ? ColorSheet.buttonBackgroundColor
               : ColorSheet.backgroundColor,
            opacity: disabled ? 0.5 : 1,

            borderWidth: 1.5,
            borderColor: stroke ? ColorSheet.buttonBackgroundColor : 'rgba(0,0,0,0)',
            borderRadius: 10,

            paddingVertical: 12,

            shadowColor: shadow ? 'black' : undefined,
            shadowOffset: shadow
               ? {
                    width: 0,
                    height: 0,
                 }
               : undefined,
            shadowOpacity: shadow ? 0.18 : undefined,
            shadowRadius: shadow ? 1 : undefined,

            elevation: 2,
            ...style,
         }}>
         <Text
            style={{
               textAlign: 'center',
               color: fill ? 'white' : ColorSheet.buttonBackgroundColor,
               ...textStyle
            }}>
            {children}
         </Text>
      </TouchableOpacity>
   )
}

export default Button
