import { IncomingMessage, ServerResponse } from 'http'
import DB from '@database'

/**
 * Get all avocados
 * @param request IncomingMessage
 * @param response ServerResponse
 */
const allAvos = async (request: IncomingMessage, response: ServerResponse) => {
  const db = new DB()
  const allEntries = await db.getAll()
  const lengthEntries = allEntries.length
  response.statusCode = 200
  response.setHeader('Content-type', 'application/json')
  response.end(JSON.stringify({ allEntries, lengthEntries }))
}

export default allAvos
