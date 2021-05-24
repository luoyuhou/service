import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { ServiceConfig } from "./service.entity";

@Injectable()
export class ServiceService extends TypeOrmCrudService<ServiceConfig> {
  constructor(@InjectRepository(ServiceConfig) repo) {
    super(repo);
  }

  public async fetch(key: string) {
    key = key.trim();
    if (!key) {
      return false;
    }
    return await this.repo.findOne({ serviceConfigKey: key });
  }

  public async save(req) {
    const service = await this.fetch(req.key);
    if (!service) {
      return await this.repo.save({
        serviceConfigKey: req.key,
        serviceConfigHost: req.host,
        serviceConfigPort: req.port,
      });
    }
    return await this.repo.save({
      ...service,
      ...req,
      serviceConfigUpdateDate: new Date(),
    });
  }
}
