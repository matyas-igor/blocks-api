import { ApolloServer } from 'apollo-server'
import { BlocksAPI } from './sources/blocks'
import { DayResolver } from './resolvers/Day'
import { HashResolver } from './resolvers/Hash'
import { typeDefs } from './schema'

const resolvers = {
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

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
