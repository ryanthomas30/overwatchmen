import dotenv from 'dotenv-flow'
dotenv.config()

import 'reflect-metadata'
import 'module-alias/register'

import { run } from './server'

run()
