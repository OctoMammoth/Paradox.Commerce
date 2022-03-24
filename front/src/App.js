import React from 'react'
import Navigation from './navigation'
import Toast from 'react-native-toast-message'
import toastConfig from './toast.config.js'
import YaMap from 'react-native-yamap'
import {MAP_KEY} from './yamap.config'

import {ApolloProvider} from '@apollo/client'
import client from './apollo'

YaMap.init(MAP_KEY)

const App = () => {
   return (
      <ApolloProvider client={client}>
         <Navigation />
         <Toast config={toastConfig} />
      </ApolloProvider>
   )
}

export default App
