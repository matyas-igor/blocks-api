import { gql } from 'apollo-server'

export const typeDefs = gql`
  scalar Day
  scalar Hash
  scalar BigInt

  type BlockDescription {
    height: Int
    hash: Hash
    time: Int
  }

  type Block {
    hash: Hash
    prev_block: Hash
    mrkl_root: Hash
    ver: Int
    time: Int
    bits: BigInt
    fee: BigInt
    nonce: BigInt
    n_tx: Int
    size: BigInt
    block_index: Int
    main_chain: Boolean
    height: Int
    weight: BigInt
  }

  type BlocksConnection {
    total: Int!
    blocks: [BlockDescription]!
  }

  type TransactionOutput {
    type: Int
    spent: Boolean
    value: BigInt
    n: Int
    addr: String
    tx_index: Int
    script: String
  }

  type TransactionInput {
    sequence: BigInt
    witness: String
    script: String
    index: Int
    prev_out: TransactionOutput
  }

  type Transaction {
    hash: Hash
    ver: Int
    vin_sz: Int
    vout_sz: Int
    size: Int
    weight: Int
    fee: BigInt
    relayed_by: String
    lock_time: Int
    tx_index: BigInt
    double_spend: Boolean
    result: Int
    balance: Int
    time: Int
    block_index: Int
    block_height: Int
    inputs: [TransactionInput]
    out: [TransactionOutput]
  }

  type TransactionsConnection {
    total: Int!
    transactions: [Transaction]!
  }

  type Query {
    blocks(date: Day!, offset: Int, limit: Int): BlocksConnection!
    block(hash: Hash!): Block
    transactions(hash: Hash!, offset: Int, limit: Int): TransactionsConnection!
  }
`
