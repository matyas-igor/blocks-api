import { RESTDataSource } from 'apollo-datasource-rest'

export class BlocksAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://blockchain.info/'
  }

  async getBlocks(date) {
    const data = await this.get(`blocks/${date.getTime()}?format=json`)
    return data.blocks
  }

  async getBlockByHash(hash) {
    const data = await this.get(`rawblock/${hash}`)
    return data
  }
}
