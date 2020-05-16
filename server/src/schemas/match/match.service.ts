import { DataSource } from 'apollo-datasource'
import { Match } from './match.entity'
import { ProducedContext } from '@/context'

export class MatchService extends DataSource<ProducedContext> {

	getByUser(userId: string) {
		return Match.find({ where: { user: userId } })
	}
}
