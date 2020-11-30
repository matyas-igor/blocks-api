import { ApolloServer } from 'apollo-server'
import { typeDefs } from './schema'
import { BlocksAPI } from './sources/blocks'
import { DayResolver } from './resolvers/Day'
import { HashResolver } from './resolvers/Hash'
import { BlocksQuery } from './queries/blocks'

const resolvers = {
  Day: DayResolver,
  Hash: HashResolver,
  Query: {
    ...BlocksQuery,
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
