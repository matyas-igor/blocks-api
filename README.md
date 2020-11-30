# 🤖 Blocks Explorer

Simple Apollo's GraphQL API for blocks from Bitcoin's blockchain.

- Built with Apollo and REST Data Sources

# Caching

- For caching in this project optimal setup would be Cache Aside strategy with LRU policy
- Caching can be implemented at two levels in Apollo - GraphQL level and Data Fetching level
  - In this project I've only implemented in Data Fetching level
- For production setup I would have a separate instance with Redis or Memcached to implement a single cache layer for multiple web server node instances
- For development setup I just used a simple local in-memory LRU cache which is bilt in Apollo REST Data Source
  - Cache population on start is not implemented for the simplicity reason

# Limitation

- Build and run scripts are not production-ready, they are not properly optimized
- Lots of things like proper validation are simplified
