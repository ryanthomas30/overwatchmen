import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'

enum Role {
	TANK = 'tank',
	DAMAGE = 'damage',
	SUPPORT = 'support',
}

enum Result {
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
		enum: Result,
	})
	result!: Result

	@Column('date')
	matchTime!: Date
}
