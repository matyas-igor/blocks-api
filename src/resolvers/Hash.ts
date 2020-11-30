import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'

export const HashResolver = new GraphQLScalarType({
  name: 'Hash',
  description: 'Hash scalar type',
  parseValue(value) {
    return value
  },
  serialize(value) {
    return value
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING && ast.value.length === 64) {
      return ast.value
    }
    return null
  },
})
