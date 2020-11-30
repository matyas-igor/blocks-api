# 🤖 Blocks Explorer

Simple Apollo's GraphQL API for blocks from Bitcoin's blockchain.

- Built with Apollo and REST Data Sources

# Caching

- For caching in this project optimal setup would be Cache Aside strategy with LRU policy
- Caching can be implemented at two levels in Apollo - GraphQL level and Data Fetching level
  - In this project I've only implemented in Data Fetching level
- For production setup I would have a separate instance with Redis or Memcached to implement a cache layer
- For development setup I just implemented a simple local in-memory LRU cache
  - Cache population on start is not implemented for the simplicity reason

# Limitation

- Typescript is not used in this project for the sake of simplicity, although it's highly recommended
- Build and run scripts are not production-ready, they are not properly optimized
- Lots of things like proper validation are simplified
