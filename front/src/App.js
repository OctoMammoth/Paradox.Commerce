import React from 'react'
import Navigation from './navigation'
import Toast from 'react-native-toast-message'
import toastConfig from './toast.config.js'
import YaMap from 'react-native-yamap'
import { MAP_KEY } from './yamap.config'

YaMap.init(MAP_KEY)

const App = () => {

   return (
      <>
         <Navigation />
         <Toast config={toastConfig} />
      </>
   )
}

export default App
