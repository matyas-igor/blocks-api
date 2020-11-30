import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'
import { formatDay, parseDay, validateDay } from '../helpers/date'

export const DayResolver = new GraphQLScalarType({
  name: 'Day',
  description: 'Day scalar type in YYYY-MM-DD format',
  parseValue(value) {
    return parseDay(value)
  },
  serialize(value) {
    return formatDay(value)
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING && validateDay(ast.value)) {
      return parseDay(ast.value)
    }
    return null
  },
})
