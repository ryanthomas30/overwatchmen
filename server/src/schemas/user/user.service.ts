import { DataSource } from 'apollo-datasource'
import { User } from './user.entity'
import { ProducedContext } from '@/context'

export class UserService extends DataSource<ProducedContext> {

	getUser(userId: string) {
		return User.findOne({ where: { id: userId } })
	}

}

