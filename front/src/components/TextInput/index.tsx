import React, {useState} from 'react'
import {
   KeyboardTypeOptions,
   View,
   TextInput as RNTextInput,
   useColorScheme,
   StyleSheet,
   ViewStyle,
} from 'react-native'
import Colors from '../../colors'
import Text from '../Text'

type Props = {
   state?: string
   setState?: any
   title?: string
   placeholder?: string
   secureTextEntry?: boolean
   autoCorrect?: boolean
   keyboardType: KeyboardTypeOptions
   style: ViewStyle
   textContentType: any
}

const TextInput = ({
   state,
   setState,
   keyboardType='default',
   title,
   placeholder,
   style,
   secureTextEntry,
   autoCorrect,
   textContentType
}: Props) => {
   const isDarkMode = useColorScheme() === 'dark'
   const ColorSheet = isDarkMode ? Colors.dark : Colors.light

   return (
      <View
         style={{
            paddingHorizontal: 16,
            backgroundColor: ColorSheet.inputBackground,
            borderRadius: 10,
            paddingVertical: 8,
            ...style,
         }}>
         {title ? (
            <Text style={{fontSize: 10, color: ColorSheet.inputTitle}}>
               {title}
            </Text>
         ) : null}
         <RNTextInput
            textContentType={textContentType}
            autoCorrect={autoCorrect}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            value={state}
            style={{
               color: ColorSheet.textColor,
               fontFamily: Colors.font,
               fontSize: 14,
               margin: 0,
               padding: 0,
            }}
            onChangeText={e => {
               if (setState) setState(e)
            }}
            placeholderTextColor={ColorSheet.placeholder}
            placeholder={placeholder}
         />
      </View>
   )
}

export default TextInput
