import { ApolloError } from 'apollo-server'
import { DataSource } from 'apollo-datasource'
import { Match, Role, MatchResult } from './match.entity'
import { User } from '../user/user.entity'
import { ProducedContext } from '@/context'

interface NewMatch {
	mapId?: number
	heroIds?: number[]
	role: Role[]
	skillRating: number
	result: MatchResult
	matchTime: string
}

export class MatchService extends DataSource<ProducedContext> {

	getAllByUser(userId: string) {
		return Match.find({ where: { user: userId } })
	}

	async addToUser(newMatch: NewMatch, userId: string) {
		const user = await User.find({
			where: { id: userId },
			relations: ['matches'],
		})
		if (!user) throw new ApolloError('User does not exist')
		// Find heroes
		// Find map
		// Create match
		// Add heroes to match
		// Add map to match
		// Save match
		// Add match to user.matches
		// Save user
	}
}
