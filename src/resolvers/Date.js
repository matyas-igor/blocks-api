import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'

export const DateResolver = new GraphQLScalarType({
  name: 'Date',
  description: 'Date scalar type in number format',
  parseValue(value) {
    return new Date(value)
  },
  serialize(value) {
    return value.getTime()
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10))
    }
    return null
  },
})
