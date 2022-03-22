const { RESTDataSource } = require("apollo-datasource-rest")
// const dateFormat = require("./dateformat")

class BiletDoApi extends RESTDataSource {
	constructor() {
		super()
		this.baseURL = "https://example.com/"
	}

	async suggestFrom(from) {
		try {
			const data = await this.get(
				`main/suggestFrom/?from=${encodeURIComponent(from)}`
			)
			return JSON.parse(data)
		} catch (error) {
			error
			throw new Error(error)
		}
	}
}

module.exports = { BiletDoApi }
