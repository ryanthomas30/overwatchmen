import { ApolloError } from 'apollo-server'
import { DataSource } from 'apollo-datasource'
import { Match, Role, MatchResult } from './match.entity'
import { User } from '../user/user.entity'
import { ProducedContext } from '@/context'
import { Map } from '../map/map.entity'
import { Hero } from '../hero/hero.entity'

interface NewMatch {
	mapId?: number
	heroIds?: number[]
	role: Role
	skillRating?: number
	result: MatchResult
	endTime: Date
}

export class MatchService extends DataSource<ProducedContext> {

	getAllByUser(userId: string) {
		return Match.find({ where: { user: userId } })
	}

	async addToUser(newMatch: NewMatch, userId: string) {
		const user = await User.find({
			where: { id: userId },
			relations: [ 'matches' ],
		})
		if (!user) throw new ApolloError('User does not exist')

		const match = new Match()
		match.role = newMatch.role
		match.result = newMatch.result
		match.endTime = newMatch.endTime
		match.user = user

		if (newMatch.mapId) match.map = await Map.find({ where: { id: newMatch.mapId } })

		if (newMatch.heroIds) {
			match.heroes = await Promise.all(
				newMatch.heroIds.map(heroId =>
					Hero.find({
						where: { id: heroId },
					})),
			)
		}

		if (match.skillRating) match.skillRating = newMatch.skillRating
		match.save()
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
