import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { Role } from '../schemas/match/match.entity'

const heroes = [
	{ name: 'D__Va', role: Role.TANK },
	{ name: 'Orisa', role: Role.TANK },
	{ name: 'Reinhardt', role: Role.TANK },
	{ name: 'Roadhog', role: Role.TANK },
	{ name: 'Sigma', role: Role.TANK },
	{ name: 'Winston', role: Role.TANK },
	{ name: 'Wrecking_Ball', role: Role.TANK },
	{ name: 'Zarya', role: Role.TANK },
	{ name: 'Ashe', role: Role.DAMAGE },
	{ name: 'Bastion', role: Role.DAMAGE },
	{ name: 'Doomfist', role: Role.DAMAGE },
	{ name: 'Echo', role: Role.DAMAGE },
	{ name: 'Genji', role: Role.DAMAGE },
	{ name: 'Hanzo', role: Role.DAMAGE },
	{ name: 'Junkrat', role: Role.DAMAGE },
	{ name: 'Mccree', role: Role.DAMAGE },
	{ name: 'Mei', role: Role.DAMAGE },
	{ name: 'Pharah', role: Role.DAMAGE },
	{ name: 'Reaper', role: Role.DAMAGE },
	{ name: 'Soldier_76', role: Role.DAMAGE },
	{ name: 'Sombra', role: Role.DAMAGE },
	{ name: 'Symmetra', role: Role.DAMAGE },
	{ name: 'Torbjorn', role: Role.DAMAGE },
	{ name: 'Tracer', role: Role.DAMAGE },
	{ name: 'Widowmaker', role: Role.DAMAGE },
	{ name: 'Ana', role: Role.SUPPORT },
	{ name: 'Baptiste', role: Role.SUPPORT },
	{ name: 'Brigette', role: Role.SUPPORT },
	{ name: 'Lucio', role: Role.SUPPORT },
	{ name: 'Mercy', role: Role.SUPPORT },
	{ name: 'Moira', role: Role.SUPPORT },
	{ name: 'Zenyatta', role: Role.SUPPORT },
]

export default class CreateHeroes implements Seeder {
	public async run(factory: Factory, connection: Connection): Promise<any> {
		await connection
			.createQueryBuilder()
			.insert()
			.into('Hero')
			.values(heroes)
			.execute()
	}
}
