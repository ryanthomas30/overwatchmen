import { Entity, BaseEntity, PrimaryColumn, Column, CreateDateColumn, OneToMany } from 'typeorm'
import { Match } from '../match/match.entity'

@Entity()
export class User extends BaseEntity {

	@PrimaryColumn()
	id!: string

	@Column()
	fullName!: string

	@Column({
		unique: true,
	})
	email!: string

	@CreateDateColumn()
	createdAt!: Date

	@OneToMany(() => Match, match => match.user)
	matches!: Match[]
}
