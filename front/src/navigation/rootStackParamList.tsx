import type {NativeStackScreenProps} from '@react-navigation/native-stack'

type JsonDataType = {
   fn: string
   fp: string
   i: string
   n: string
   s: string
   t: string
}

export type RootStackParamList = {
   Splash: undefined
   Auth: undefined
   SignUp: undefined
   SelectRole: undefined
   SignIn: undefined
   UserHome: undefined
   Camera: undefined
   Favorite: undefined
   UserProfile: undefined
   Captcha: {
      jsonData: JsonDataType
   }
   Scraping: {
      jsonData: JsonDataType
   }

   Main: undefined
}
