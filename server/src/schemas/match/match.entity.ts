import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm'
import { User } from '../user/user.entity'
import { Map } from '../map/map.entity'
import { Hero } from '../hero/hero.entity'

export enum Role {
	TANK = 'tank',
	DAMAGE = 'damage',
	SUPPORT = 'support',
}

export enum MatchResult {
	WIN = 'win',
	LOSS = 'loss',
	DRAW = 'draw',
}

@Entity()
export class Match extends BaseEntity {

	@PrimaryGeneratedColumn()
	id!: number

	@Column({
		type: 'enum',
		enum: Role,
	})
	role!: Role

	@Column()
	skillRating?: number

	@Column({
		type: 'enum',
		enum: MatchResult,
	})
	result!: MatchResult

	@Column('timestamptz')
	endTime!: Date

	@ManyToOne(() => User, user => user.matches)
	user!: User

	@ManyToOne(() => Map, { eager: true })
	map?: Map

	@ManyToMany(() => Hero, { eager: true })
	@JoinTable({
		name: 'match_hero',
	})
	heroes?: Hero[]
}
