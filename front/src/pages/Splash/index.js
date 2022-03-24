import React from "react"
import { Dimensions, SafeAreaView, PixelRatio, View, useColorScheme } from "react-native"
import Colors from "../../colors.js"
import Logo from "./logo.js"
import SplashSVG from "./splash.js"

const Splash = ({navigation}) => {
    const isDarkMode = useColorScheme() === 'dark'
    const ColorSheet = isDarkMode ? Colors.dark : Colors.light

    setTimeout(() => {navigation.replace('Auth')}, 5000)

    const {width, height} = Dimensions.get('window')
    return <SafeAreaView>
        <SafeAreaView style={{position: 'absolute',alignItems: "center", justifyContent: 'center', width, height, backgroundColor: "#252935"}}>
            <SplashSVG width={width} height={height}/>
        </SafeAreaView>
        <View style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <Logo/>
            <View style={{height: 50}}/>
        </View>
    </SafeAreaView>
}

export default Splash