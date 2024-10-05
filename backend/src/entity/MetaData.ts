import { Column } from "typeorm";

export abstract class MetaData {
  @Column({ readonly: true, default: () => "CURRENT_TIMESTAMP" })
  created_at: Date;

  @Column({
    readonly: true,
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  modified_at: Date;
}
