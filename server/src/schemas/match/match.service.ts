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

		const { mapId, heroIds, ...newMatchDetails } = newMatch

		const user = await User.findOne({
			where: { id: userId },
			relations: ['matches'],
		})

		if (!user) throw new ApolloError('User does not exist')

		const map = await Map.findOne({ where: { id: mapId } })
		const heroes = await Hero.findByIds(heroIds ?? [])

		const match = Match.create({
			...newMatchDetails,
			user,
			map,
			heroes,
		})

		try {
			const createdMatch = await match.save()
			return createdMatch
		} catch (error) {
			switch (error.code) {
				default:
					throw new ApolloError('An error occurred when creating this match')
			}
		}
	}

}
