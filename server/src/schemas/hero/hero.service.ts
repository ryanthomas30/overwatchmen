import { DataSource } from 'apollo-datasource'
import { Hero } from './hero.entity'
import { ProducedContext } from '@/context'
import { Role } from '../match/match.entity'
import { ApolloError } from 'apollo-server'

interface NewHero {
	name: string
	role: Role
}
export class HeroService extends DataSource<ProducedContext> {
	getAll() {
		return Hero.find()
	}
	getOne(heroId:number) {
		return Hero.findOne({ where: { id: heroId } })
	}

	async create(newHero:NewHero) {
		const hero = Hero.create({
			...newHero,
		})
		try {
			const heroResponse = await hero.save()
			return heroResponse
		} catch (error) {
			switch (error.code) {
				default:
					throw new ApolloError('An error occured when creating this hero')
			}
		}
	}
}
