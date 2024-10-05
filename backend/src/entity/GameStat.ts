import { Column, Entity, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { MetaData } from "./MetaData";
import { Game } from "./Game";
import { User } from "./User";

@Entity()
export class GameStat extends MetaData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @PrimaryColumn({ name: 'game_id', type: 'int' })
  @OneToOne(() => Game, (game) => game.id)
  crossword: Game

  @PrimaryColumn({ name: 'user_id', type: 'int' })
  @OneToOne(() => Game, (game) => game.id)
  user: User

  @Column()
  score: number;

  @Column("varchar", { array: true, nullable: true })
  wrong_guesses: string[];

  @Column("varchar", { array: true, nullable: true })
  correct_guesses: string[];
  
}
