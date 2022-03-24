import {gql} from '@apollo/client'

export const COMPARE_DATA = gql`
   mutation ($scrapped: CompareCheckInput!) {
      compareCheck(scrapped: $scrapped)
   }
`
