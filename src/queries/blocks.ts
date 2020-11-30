import 'apollo-cache-control'

export const BlocksQuery = {
  blocks: async (_source, { date }, { dataSources }, info) => {
    info.cacheControl.setCacheHint({ maxAge: 180 })
    return dataSources.blocksAPI.getBlocks(date)
  },
  block: async (_source, { hash }, { dataSources }, info) => {
    info.cacheControl.setCacheHint({ maxAge: 180 })
    return dataSources.blocksAPI.getBlockByHash(hash)
  },
}
