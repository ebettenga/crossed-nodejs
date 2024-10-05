import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { MetaData } from "./MetaData";

export type DOW = "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";

@Entity()
export class Crossword extends MetaData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("json")
  clues: JSON;

  @Column("json")
  answers: JSON;

  @Column("integer", { array: true, nullable: true })
  circles: number[];

  @Column()
  date: Date;

  @Column()
  dow: DOW;

  @Column("varchar", { array: true, nullable: true })
  grid: string[];

  @Column("integer", { array: true, nullable: true })
  gridnums: number[];

  @Column()
  shadeCircles: boolean;

  @Column("integer", { array: true, nullable: true })
  col_sizes: number[];

  @Column("integer", { array: true, nullable: true })
  row_sizes: number[];

  @Column()
  jnote: string;

  @Column()
  notepad: string;

  @Column()
  title: string;
}
