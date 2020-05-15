import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Hero extends BaseEntity {
	@PrimaryGeneratedColumn()
	id!: number

	@Column()
	name!: string
}
