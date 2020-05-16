import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm'
import { Match } from '../match/match.entity'

@Entity()
export class User extends BaseEntity {

	@PrimaryGeneratedColumn()
	id!: number

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
