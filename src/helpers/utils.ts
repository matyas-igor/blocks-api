import { logger } from './logs'

export const paginate = (data: any[], offset: number, limit: number) => {
  return data.slice(offset, offset + limit)
}

export const runFetchRequest = async (p: Promise<any>, url: string): Promise<any> => {
  let result

  logger.info(`Start fetching url ${url}`)
  try {
    result = await p
    logger.info(`Done fetching url ${url}`)
  } catch (e) {
    logger.error(`Error while fetching url ${url}: ${e.message}`)
    throw e
  }

  return result
}