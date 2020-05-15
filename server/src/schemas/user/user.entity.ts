import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'

@Entity()
export class User extends BaseEntity {

	@PrimaryGeneratedColumn()
	id!: number

	@Column()
	firebaseId!: string

	@Column()
	fullName!: string

	@Column()
	email!: string

	@CreateDateColumn()
	createdAt!: Date
}
