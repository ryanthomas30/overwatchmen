import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { Role } from '../match/match.entity'

@Entity()
export class Hero extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column()
	name!: string

	@Column()
	role!: Role
}
