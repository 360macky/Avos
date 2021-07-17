import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

/**
 * Get one avocado
 * @param request NextApiRequest
 * @param response NextApiResponse
 */
const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new DB()
  const avocadoId = request.query.id
  const avocadoData = await db.getById(avocadoId as string)

  response.statusCode = 200
  response.setHeader('Content-type', 'application/json')
  response.end(JSON.stringify({ avocadoData }))
}

export default allAvos
