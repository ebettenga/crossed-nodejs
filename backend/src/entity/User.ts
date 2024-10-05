import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { MetaData } from "./MetaData";

@Entity()
export class User extends MetaData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: true })
  first_name?: string;

  @Column({ nullable: true })
  last_name?: number;

  @Column()
  email: string;

}