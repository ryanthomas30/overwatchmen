import { ApolloError } from 'apollo-server'
import { DataSource } from 'apollo-datasource'
import { Map, MapType } from './map.entity'
import { ProducedContext } from '@/context'

interface NewMap {
	name: string
	type: MapType
}
export class MapService extends DataSource<ProducedContext> {
	getOne(mapId: number) {
		return Map.findOne({ where: { id: mapId } })
	}
	getAll() {
		return Map.find()
	}
	async create(newMap: NewMap) {
		const map = Map.create({
			...newMap,
		})
		try {
			const mapResponse = await map.save()
			return mapResponse
		} catch (error) {
			switch (error.code) {
				default:
					throw new ApolloError('An error occurred when creating this map')
			}
		}
	}
}
