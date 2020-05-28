import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum MapType {
  CONTROL = "control", // King of the Hill
  ESCORT = "escort", // Payload
  ASSAULT = "assault", // 2CP
  HYBRID = "hybrid" // 1CP + Payload
}

@Entity()
export class Map extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: "enum",
    enum: MapType
  })
  type!: MapType

  @Column()
  name!: string
}
