# 🤖 Blocks Explorer

Simple GraphQL API for blocks from Bitcoin's blockchain.

- Built with Apollo and REST Data Sources
- Uses [Blockchain.com Explorer](https://www.blockchain.com/explorer) API
- Hosted example: https://blocks-graphql-api.herokuapp.com/

![Screen Shot 2020-11-30 at 23 34 04](https://user-images.githubusercontent.com/3536796/100661829-561de000-3354-11eb-8efc-1594b066afde.png)

![Screen Shot 2020-11-30 at 23 35 07](https://user-images.githubusercontent.com/3536796/100661833-57e7a380-3354-11eb-81e0-016e18285b0c.png)

# Caching

- For caching in this project optimal setup would be Cache Aside strategy with LRU policy
- Caching can be implemented at two levels in Apollo - GraphQL level and Data Fetching level
  - In this project GraphQL resources caching is used (as described in [documentation](https://www.apollographql.com/docs/apollo-server/performance/caching/))
  - Also, caching together with requests deduplication is implemented in Data Sources itself (as described [in this post](https://khalilstemmler.com/blogs/graphql/how-apollo-rest-data-source-caches-api-calls/))
  - Cache population on start is not implemented for the simplicity reason
- For production setup I would have a separate instance with Redis or Memcached
  - To implement a single cache layer for multiple web server node instances
- For development setup I just used a simple built-in caching instruments from Apollo

# Limitation

- Build and run scripts are not fully production-ready, they are not properly optimized
- Lots of things like proper validation are simplified
- No logging implemented at the moment
- It's still pretty naive implementation of blockchain-like API
