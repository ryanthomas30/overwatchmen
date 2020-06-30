import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'

/**
 * The game mode of the map.
 */
export enum MapType {
	/**
	 * King of the Hill
	 */
	CONTROL = 'control',
	/**
	 * Payload
	 */
	ESCORT = 'escort',
	/**
	 * 2CP
	 */
	ASSAULT = 'assault',
	/**
	 * 1CP + Payload
	 */
	HYBRID = 'hybrid'
}

@Entity()
export class Map extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({
		type: 'enum',
		enum: MapType,
	})
	type!: MapType

	@Column({ unique: true })
	name!: string
}
