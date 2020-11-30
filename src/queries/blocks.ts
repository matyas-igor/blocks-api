export const BlocksQuery = {
  blocks: async (_source, { date }, { dataSources }) => {
    return dataSources.blocksAPI.getBlocks(date)
  },
  block: async (_source, { hash }, { dataSources }) => {
    return dataSources.blocksAPI.getBlockByHash(hash)
  },
}
