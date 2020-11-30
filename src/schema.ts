import { gql } from 'apollo-server'

export const typeDefs = gql`
    scalar Day
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