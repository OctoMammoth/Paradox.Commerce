import {gql} from '@apollo/client'

export const FIND_POINTS_LL = gql`
    query CheckMap {
  findManyPoint{
    id
    lat
    lng
  }
}
`