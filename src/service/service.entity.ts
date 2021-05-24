import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("service_config_key_index", ["serviceConfigKey"], { unique: true })
@Entity("service_config", { schema: "apps" })
export class ServiceConfig {
  @PrimaryGeneratedColumn({ type: "int", name: "service_config_id" })
  serviceConfigId: number;

  @Column("varchar", { name: "service_config_key", unique: true, length: 64 })
  serviceConfigKey: string;

  @Column("varchar", { name: "service_config_host", length: 64 })
  serviceConfigHost: string;

  @Column("int", { name: "service_config_port" })
  serviceConfigPort: number;

  @Column("tinyint", {
    name: "service_config_status",
    width: 1,
    default: () => "'1'",
  })
  serviceConfigStatus: boolean;

  @Column("datetime", {
    name: "service_config_create_date",
    default: () => "CURRENT_TIMESTAMP",
  })
  serviceConfigCreateDate: Date;

  @Column("datetime", {
    name: "service_config_update_date",
    default: () => "CURRENT_TIMESTAMP",
  })
  serviceConfigUpdateDate: Date;
}
