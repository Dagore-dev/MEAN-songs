import { connect } from 'mongoose'

export default async function dbConnection (): Promise<typeof import('mongoose')> {
  return await connect(process.env.MONGO_URI ?? '')
}
