import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { MapType } from '../schemas/map/map.entity'

const maps = [
	{
		'name': 'Hanamura',
		'type': MapType.ASSAULT,
	},
	{
		'name': 'Horizon_Lunar_Colony',
		'type': MapType.ASSAULT,
	},
	{
		'name': 'Paris',
		'type': MapType.ASSAULT,
	},
	{
		'name': 'Temple_of_Anubis',
		'type': MapType.ASSAULT,
	},
	{
		'name': 'Volskaya_Industries',
		'type': MapType.ASSAULT,
	},
	{
		'name': 'Dorado',
		'type': MapType.ESCORT,
	},
	{
		'name': 'Havana',
		'type': MapType.ESCORT,
	},
	{
		'name': 'Junkertown',
		'type': MapType.ESCORT,
	},
	{
		'name': 'Rialto',
		'type': MapType.ESCORT,
	},
	{
		'name': 'Route_66',
		'type': MapType.ESCORT,
	},
	{
		'name': 'Watchpoint_Gibraltar',
		'type': MapType.ESCORT,
	},
	{
		'name': 'Blizzard_World',
		'type': MapType.HYBRID,
	},
	{
		'name': 'Eichenwalde',
		'type': MapType.HYBRID,
	},
	{
		'name': 'Hollywood',
		'type': MapType.HYBRID,
	},
	{
		'name': 'Kings_Row',
		'type': MapType.HYBRID,
	},
	{
		'name': 'Numbani',
		'type': MapType.HYBRID,
	},
	{
		'name': 'Busan',
		'type': MapType.CONTROL,
	},
	{
		'name': 'Ilios',
		'type': MapType.CONTROL,
	},
	{
		'name': 'Lijiang_Tower',
		'type': MapType.CONTROL,
	},
	{
		'name': 'Nepal',
		'type': MapType.CONTROL,
	},
	{
		'name': 'Oasis',
		'type': MapType.CONTROL,
	},
]

export default class CreateMaps implements Seeder {
	public async run(factory: Factory, connection: Connection): Promise<any> {
		await connection
			.createQueryBuilder()
			.insert()
			.into('Map')
			.values(maps)
			.execute()
	}
}
