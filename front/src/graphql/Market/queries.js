import {gql} from '@apollo/client'

export const QUERY_MARKET = gql`
query ($id: String){
  findUniquePoint(where: {id: $id}){
    id
    address
    lat
    lng
    fn
    owner
  }
  findManyPosition(where: {checkouts: {some: {check: {pointId: { equals: $id} }}}}) {
    id
    name
    checkouts(take: 1, orderBy: {time: desc}) {
      price
    }
  }
}
`