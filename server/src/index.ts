import dotenv from 'dotenv-flow'
dotenv.config()

import "reflect-metadata";
import 'module-alias/register'

import { server } from './server'

server.listen().then(({ url }) => {
	// eslint-disable-next-line
	console.log(`🚀  Server ready at ${url}`)
})
