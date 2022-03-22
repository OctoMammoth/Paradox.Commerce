import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'

import {RootStackNav} from './mainStack'

const Navigation = () => {
   return (
      <NavigationContainer>
         <RootStackNav />
      </NavigationContainer>
   )
}

export default Navigation
