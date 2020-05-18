import { ApolloError } from 'apollo-server'
import { DataSource } from 'apollo-datasource'
import { User } from './user.entity'
import { ProducedContext } from '@/context'

interface NewUser {
	fullName: string
	email: string
}

export class UserService extends DataSource<ProducedContext> {

	getOne(userId: string) {
		return User.findOne({ where: { id: userId } })
	}

	async create(newUser: NewUser) {
		const user = User.create({
			...newUser,
		})
		try {
			const userResponse = await user.save()
			return userResponse
		} catch (error) {
			switch (error.code) {
				case '23505':
					throw new ApolloError('A user with this email already exists')
				default:
					throw new ApolloError('An error occurred when creating this user')
			}
		}

	}
}

