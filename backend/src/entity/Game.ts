
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { MetaData } from "./MetaData";
import { User } from "./User";
import { Crossword } from "./Crossword";

@Entity()
export class Game extends MetaData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToOne(() => Crossword, (crossword) => crossword.id)
  crossword: Crossword

  @OneToMany(() => User, (user) => user.id)
  users: User[]

  @Column()
  difficulty: string;
  
}