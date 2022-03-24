const cuid = require("cuid")
const axios = require("axios")
const convert = require("xml-js")

const resolvers = {
	Mutation: {
		compareCheck: async (_parent, { scrapped }, { prisma }) => {
			const point = await prisma.point.findFirst({
				where: {
					address: {
						equals: scrapped.address
					}
				},
				select: {
					id: true,
					checks: {
						select: {
							id: true
						}
					}
				}
			})
			const check = await prisma.check.findFirst({
				where: {
					fpd: { equals: scrapped.fpd },
					fd: { equals: scrapped.i }
				}
			})
			// console.log(check)
			if (check) return false
			if (!point) {
				let checkId = cuid()

				let { data: geocode } = await axios(
					encodeURI(
						`https://geocode-maps.yandex.ru/1.x?apikey=35768daa-5c87-4fb0-a499-f9295f2e57aa&geocode=${scrapped.address}`
					)
				)
				const jsonGeocode = convert.xml2json(geocode, {
					compact: false,
					spaces: 4,
					ignoreAttributes: true
				})
				const [lng, lat] =
					JSON.parse(
						jsonGeocode
					).elements[0].elements[0].elements[1].elements[0].elements[4].elements[0].elements[0].text.split(
						" "
					)

				await prisma.point.create({
					data: {
						address: scrapped.address,
						lat: parseFloat(lat),
						lng: parseFloat(lng),
						fn: scrapped.fn,
						owner: scrapped.owner,
						checks: {
							create: {
								id: checkId,
								fd: scrapped.i,
								fpd: scrapped.fpd,
								cashier: scrapped.cashier,
								givenDate: scrapped.givenDate,
								userInn: scrapped.userInn,
								inn: scrapped.inn,
								shiftDocId: scrapped.shiftDocId,
								shiftId: scrapped.shiftId,
								type: scrapped.title,
								summ: scrapped.sum
							}
						}
					},
					select: {
						id: true,
						checks: {
							select: {
								id: true
							}
						}
					}
				})
				let Checkouts = await scrapped.cart.map(async (e) => {
					const checkout = await prisma.checkout.create({
						data: {
							count: e.count,
							isCash: scrapped.cash > scrapped.notcash,
							price: e.price,
							time: scrapped.givenDate,
							check: {
								connect: {
									id: checkId
								}
							},
							position: {
								connectOrCreate: {
									where: {
										name: e.name
									},
									create: {
										name: e.name
									}
								}
							}
						}
					})
					return checkout
				})
			} else {
				let checkId = cuid()

				// console.log(point.id)

				await prisma.check.create({
					data: {
						id: checkId,
						fd: scrapped.i,
						fpd: scrapped.fpd,
						cashier: scrapped.cashier,
						givenDate: scrapped.givenDate,
						userInn: scrapped.userInn,
						inn: scrapped.inn,
						shiftDocId: scrapped.shiftDocId,
						shiftId: scrapped.shiftId,
						type: scrapped.title,
						summ: scrapped.sum,
						point: {
							connect: {
								id: point.id
							}
						}
					}
				})

				let Checkouts = await scrapped.cart.map(async (e) => {
					const checkout = await prisma.checkout.create({
						data: {
							count: e.count,
							isCash: scrapped.cash > scrapped.notcash,
							price: e.price,
							time: scrapped.givenDate,
							check: {
								connect: {
									id: checkId
								}
							},
							position: {
								connectOrCreate: {
									where: {
										name: e.name
									},
									create: {
										name: e.name
									}
								}
							}
						}
					})
					return checkout
				})
			}
			return true
		}
	}
}
module.exports = resolvers
