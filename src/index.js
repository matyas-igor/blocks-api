import { ApolloServer, gql } from 'apollo-server'
import { BlocksAPI } from './sources/blocks'
import { DateResolver } from './resolvers/Date'
import { DayResolver } from './resolvers/Day'
import { HashResolver } from './resolvers/Hash'

const typeDefs = gql`
  scalar Day
  scalar Date
  scalar Hash

  type BlockDescription {
    height: Int
    hash: Hash
    time: Int
  }

  type Block {
    hash: Hash
    ver: Int
    prev_block: String
    mrkl_root: String
    time: Int
    bits: Int
    block_index: Int
    height: Int
    main_chain: Boolean
    n_tx: Int
    nonce: Int
    received_time: Int
    relayed_by: String
    size: Int
  }

  type Query {
    blocks(date: Day!): [BlockDescription]
    block(hash: Hash!): Block
  }
`

const resolvers = {
  Date: DateResolver,
  Day: DayResolver,
  Hash: HashResolver,
  Query: {
    blocks: async (_source, { date }, { dataSources }) => {
      return dataSources.blocksAPI.getBlocks(date)
    },
    block: async (_source, { hash }, { dataSources }) => {
      return dataSources.blocksAPI.getBlockByHash(hash)
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      blocksAPI: new BlocksAPI(),
    }
  },
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
