import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MetaData } from "./MetaData";
import { User } from "./User";
import { Crossword } from "./Crossword";
import { Max, Min } from "class-validator";

export type GameStatus = "waiting" | "in_progress" | "completed" | "cancelled";

@Entity()
export class Game extends MetaData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToOne(() => Crossword, (crossword) => crossword.id)
  crossword: Crossword;

  @OneToMany(() => User, (user) => user.id)
  users: User[];

  @Column()
  difficulty: string;

  @Column()
  status: GameStatus;

  @Column({ default: 1 })
  @Min(1)
  min_players: number;

  @Column({ nullable: true })
  @Max(10)
  max_players: number;

  @Column({ default: false })
  is_public: boolean;
}
