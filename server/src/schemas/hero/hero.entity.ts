import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { Role } from '../match/match.entity'

@Entity()
export class Hero extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column({ unique: true })
	name!: string

	@Column({ nullable: true })
	role!: Role
}
