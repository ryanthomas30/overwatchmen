import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { User } from '../user/user.entity'

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
	skillRating!: number

	@Column({
		type: 'enum',
		enum: MatchResult,
	})
	result!: MatchResult

	@Column('date')
	matchTime!: Date

	@ManyToOne(() => User, user => user.matches)
	user!: User
}
