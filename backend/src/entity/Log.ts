import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { MetaData } from "./MetaData";

export type Serverity = "log" | "warning" | "error";

@Entity()
export class Log extends MetaData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  message: string;

  @Column({ nullable: true })
  user_id?: number;

  @Column({ default: "log" })
  severity: Serverity;
  
}
