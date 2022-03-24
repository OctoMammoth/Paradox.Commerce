import axios from 'axios'
import React from 'react'
import {
   SafeAreaView,
   ScrollView,
   StyleSheet,
   useColorScheme,
   View,
} from 'react-native'
import Colors from '../../colors'
import Text from '../../components/Text'
import * as cheerio from 'cheerio'
import Button from '../../components/Button'
import { useMutation } from '@apollo/client'
import { COMPARE_DATA } from '../../graphql/CompareData'
import client from '../../apollo'

const Scraping = ({
   navigation,
   route: {
      params: {jsonData},
   },
}) => {
   const isDarkMode = useColorScheme() === 'dark'
   const ColorSheet = isDarkMode ? Colors.dark : Colors.light

   const [page, setPage] = React.useState()
   const parseTime = t => {
      //"2022-03-21T15:21:00.000Z"
      return (
         t[0] +
         t[1] +
         t[2] +
         t[3] +
         '-' +
         t[4] +
         t[5] +
         '-' +
         t[6] +
         t[7] +
         'T' +
         t[9] +
         t[10] +
         ':' +
         t[11] +
         t[12] +
         ':00.000Z'
      )
   }
   const getData = async () => {
      try {
         const {data} = await axios.get(
            `https://check.ofd.ru/Document/FetchCachedReceiptFromFns?FnNumber=${jsonData.fn}&DocNumber=${jsonData.i}&DocFiscalSign=${jsonData.fp}&format=html`,
         )
         $ = await cheerio.load(data)
         let pageData = {
            title: $('h2[class="text-center font-size-20 color-fade"]').html(),
            owner: $('div[class="text-align-center"]').text(),
            i: $('div[class="margin-top-10 clear-both"]')
               .next()
               .children('div')
               .children('div')
               .next()
               .children('span')
               .next()
               .html(),
            givenDate: parseTime(jsonData.t),
            address: $('div[class="margin-top-10 clear-both"]')
               .next()
               .next()
               .next()
               .children('div')
               .children('div')
               .next()
               .children('span')
               .html(),
            cashier: $('div[class="margin-top-10 clear-both"]')
               .next()
               .next()
               .next()
               .next()
               .children('div')
               .children('div')
               .next()
               .html(),
            shiftId: $('div[class="margin-top-10 clear-both"]')
               .next()
               .next()
               .next()
               .next()
               .next()
               .children('div')
               .children('div')
               .next()
               .html()
               .split('#')
               .join(''),
            shiftDocId: $('div[class="margin-top-10 clear-both"]')
               .next()
               .next()
               .next()
               .next()
               .next()
               .next()
               .children('div')
               .children('div')
               .next()
               .html()
               .split('#')
               .join(''),
            userInn: $('div[class="margin-top-10 clear-both"]')
               .next()
               .next()
               .next()
               .next()
               .next()
               .next()
               .next()
               .children('div')
               .children('div')
               .next()
               .html(),
            rn: $('div[class="margin-top-10 clear-both"]')
               .next()
               .next()
               .next()
               .next()
               .next()
               .next()
               .next()
               .next()
               .children('div')
               .children('div')
               .children('span')
               .next()
               .html(),
            inn: $('div[class="margin-top-10 clear-both"]')
               .next()
               .next()
               .next()
               .next()
               .next()
               .next()
               .next()
               .next()
               .children('div')
               .children('div')
               .next()
               .children('span')
               .next()
               .next()
               .html(),
            fn: $('div[class="margin-top-10 clear-both"]')
               .next()
               .next()
               .next()
               .next()
               .next()
               .next()
               .next()
               .next()
               .next()
               .children('div')
               .children('div')
               .children('span')
               .next()
               .html(),
            fpd: $('div[class="margin-top-10 clear-both"]')
               .next()
               .next()
               .next()
               .next()
               .next()
               .next()
               .next()
               .next()
               .next()
               .children('div')
               .children('div')
               .next()
               .children('span')
               .next()
               .html(),
         }
         let cash;
         let notcash;
         $('div[class="ifw-cols ifw-cols-2"]')
            .toArray()
            .map(el => {
               if ($(el).children('div').html() === 'Наличными')
                  cash = parseFloat($(el).children('div').next().html())
               if ($(el).children('div').html() === 'Безналичными')
                  notcash = parseFloat($(el).children('div').next().html())
            })

         let test = $('div[class="margin-top-10 clear-both ifw-bill-item"]')
         let cart = test.toArray().map(el => {
            let name = $(el)
               .children('div')
               .children('div')
               .children('b')
               .html()
            if (name)
               return {
                  name: name,
                  count: parseFloat(
                     $(el)
                        .children('div')
                        .children('div')
                        .next()
                        .children('div')
                        .children('span')
                        .html(),
                  ),
                  price: parseFloat(
                     $(el)
                        .children('div')
                        .children('div')
                        .next()
                        .children('div')
                        .children('span')
                        .next()
                        .next()
                        .html(),
                  ),
                  nds: $(el)
                     .children('div')
                     .children('div')
                     .next()
                     .children('div')
                     .next()
                     .children('span')
                     .next()
                     .html()
                     .replace(/\D/g, ''),
               }
         })
         cart.pop()
         // console.log(cart)
         pageData = {
            ...pageData,
            cart,
            cash,
            notCash:notcash,
            sum: parseFloat(cart
               ?.reduce(
                  (prev, current) => prev + current.price * current.count,
                  0,
               )
               .toFixed(2)),
         }
         setPage(pageData)
         console.log(pageData)
      } catch (err) {
         console.log(err)
      }
   }

   const [compareData, { data, loading, error }] = useMutation(COMPARE_DATA, {})

   onSubmit = () => {
      compareData({
         variables: {
            scrapped: page
         },
         onCompleted: (res) => {
            navigation.popToTop()
         }
      })
   }

   React.useEffect(() => {
      getData()
      client.refetchQueries({
         include: ["CheckMap"]
      })
   }, [])

   return (
      <SafeAreaView
         style={{backgroundColor: ColorSheet.modalBackground, height: '100%'}}>
         <ScrollView style={{flex: 1}}>
            <View style={{alignItems: 'center'}}>
               {!page ? null : (
                  <>
                     <View style={{width: '100%'}}>
                        <View style={{marginHorizontal: 32}}>
                           <Text
                              style={{
                                 fontWeight: '700',
                                 fontSize: 24,
                                 marginTop: 64,
                              }}>
                              {page.title}
                           </Text>
                           <Text
                              style={{
                                 fontWeight: '400',
                                 fontSize: 14,
                                 color: ColorSheet.placeholder,
                                 marginTop: 16,
                              }}>
                              {page.owner}
                           </Text>
                           <Text
                              style={{
                                 fontWeight: '400',
                                 fontSize: 14,
                                 color: ColorSheet.placeholder,
                                 marginTop: 8,
                              }}>
                              Адрес:
                           </Text>
                           <Text
                              style={{
                                 fontWeight: '400',
                                 fontSize: 14,
                                 color: ColorSheet.placeholder,
                              }}>
                              {page.address}
                           </Text>
                           <View
                              style={{
                                 flexDirection: 'row',
                                 justifyContent: 'space-between',
                                 marginTop: 16,
                              }}>
                              <Text style={{fontSize: 14}}>
                                 ФИСКАЛЬНЫЙ ДОКУМЕНТ
                              </Text>
                              <Text style={{fontSize: 14}}>#{page.i}</Text>
                           </View>
                           <View
                              style={{
                                 flexDirection: 'row',
                                 justifyContent: 'space-between',
                                 marginTop: 8,
                              }}>
                              <Text style={{fontSize: 14}}>ДАТА ВЫДАЧИ</Text>
                              <Text style={{fontSize: 14}}>
                                 {page.givenDate}
                              </Text>
                           </View>
                           {/* <View
                              style={{
                                 flexDirection: 'row',
                                 justifyContent: 'space-between',
                              }}>
                              <Text  style={{fontSize: 12}}>АДРЕС РАСЧЁТОВ</Text>
                              <Text style={{flex: 1, textAlign: 'right', fontSize: 12}}>
                                 
                              </Text>
                           </View> */}
                           <View
                              style={{
                                 flexDirection: 'row',
                                 justifyContent: 'space-between',
                                 marginTop: 8,
                              }}>
                              <Text style={{fontSize: 12}}>КАССИР</Text>
                              <Text
                                 style={{
                                    flex: 1,
                                    textAlign: 'right',
                                    fontSize: 12,
                                 }}>
                                 {page.cashier}
                              </Text>
                           </View>
                           <View
                              style={{
                                 flexDirection: 'row',
                                 justifyContent: 'space-between',
                                 marginTop: 8,
                              }}>
                              <Text style={{fontSize: 12}}>НОМЕР СМЕНЫ</Text>
                              <Text
                                 style={{
                                    flex: 1,
                                    textAlign: 'right',
                                    fontSize: 12,
                                 }}>
                                 #{page.shiftId}
                              </Text>
                           </View>
                           <View
                              style={{
                                 flexDirection: 'row',
                                 justifyContent: 'space-between',
                                 marginTop: 8,
                              }}>
                              <Text style={{fontSize: 12}}>
                                 ДОКУМЕНТ К СМЕНЕ
                              </Text>
                              <Text
                                 style={{
                                    flex: 1,
                                    textAlign: 'right',
                                    fontSize: 12,
                                 }}>
                                 #{page.shiftDocId}
                              </Text>
                           </View>
                           <View
                              style={{
                                 flexDirection: 'row',
                                 justifyContent: 'space-between',
                                 marginTop: 8,
                              }}>
                              <Text style={{fontSize: 12}}>
                                 ИНН пользователя
                              </Text>
                              <Text
                                 style={{
                                    flex: 1,
                                    textAlign: 'right',
                                    fontSize: 12,
                                 }}>
                                 {page.userInn}
                              </Text>
                           </View>
                           <View
                              style={{
                                 flexDirection: 'row',
                                 justifyContent: 'space-between',
                                 marginTop: 8,
                              }}>
                              <Text style={{fontSize: 12}}>РН {page.rn}</Text>
                              <Text
                                 style={{
                                    flex: 1,
                                    textAlign: 'right',
                                    fontSize: 12,
                                 }}>
                                 ИНН {page.inn}
                              </Text>
                           </View>
                           <View
                              style={{
                                 flexDirection: 'row',
                                 justifyContent: 'space-between',
                                 marginTop: 8,
                                 marginBottom: 16,
                              }}>
                              <Text style={{fontSize: 12}}>ФН {page.fn}</Text>
                              <Text
                                 style={{
                                    flex: 1,
                                    textAlign: 'right',
                                    fontSize: 12,
                                 }}>
                                 ФПД {page.fpd}
                              </Text>
                           </View>
                           {page?.cart?.map(({name, count, price, nds}) => {
                              return (
                                 <View
                                    style={{
                                       flexDirection: 'row',
                                       justifyContent: 'space-between',
                                       marginTop: 8,
                                    }}>
                                    <Text style={{flex: 1}}>{name}</Text>
                                    <View style={{marginLeft: 8}}>
                                       <Text style={{textAlign: 'right'}}>
                                          {count} x {price}
                                       </Text>
                                       <Text style={{textAlign: 'right'}}>
                                          в т.ч. НДС {nds}%
                                       </Text>
                                    </View>
                                 </View>
                              )
                           })}
                           <Text>
                              Итого{' '}
                              {Number(
                                 page?.cart
                                    ?.reduce(
                                       (prev, current) =>
                                          prev + current.price * current.count,
                                       0,
                                    )
                                    .toFixed(2),
                              )}
                           </Text>
                        </View>
                     </View>
                  </>
               )}
            </View>
            <View style={{height: 150}}></View>
         </ScrollView>
         <SafeAreaView
            style={{
               position: 'absolute',
               width: '100%',
               height: '100%',
               justifyContent: 'flex-end',
               alignSelf: 'center',
               paddingHorizontal: 16,
               paddingBottom: 16,
            }}>
            <Button onPress={onSubmit} disabled={page ? false : true}>Отправить</Button>
         </SafeAreaView>
      </SafeAreaView>
   )
}

export default Scraping
