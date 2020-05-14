import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class User extends BaseEntity {

	@PrimaryGeneratedColumn()
	id!: string

	@Column()
	fullName!: string

	@Column()
	email!: string

	@Column()
	createdAt!: string

	@Column({ default: false })
	deleted!: boolean
}
