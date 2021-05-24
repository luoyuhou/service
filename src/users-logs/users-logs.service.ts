import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { UsersLogs } from "./users-logs.entity";
import { STATUS } from "../constens";
import { UsersLogsDto } from "./users-logsDto";

@Injectable()
export class UsersLogsService extends TypeOrmCrudService<UsersLogs> {
  constructor(@InjectRepository(UsersLogs) repo) {
    super(repo);
  }

  public async fetch(uid: string) {
    return await this.repo.findOne({ usersLogsUsersUId: uid });
  }

  public async insert(data: UsersLogsDto) {
    return await this.repo.save({
      usersLogsUsersUId: data.uid,
      usersLogsIp: data.ip,
      usersLogsAgent: data.agent,
      usersLogsOperation: data.content,
    });
  }

  public async delete(id: number) {
    const res = await this.repo.findOne({ usersLogsId: id });
    if (!res) {
      return false;
    }
    return await this.repo.save({
      usersLogsId: id,
      usersLogsStatus: STATUS.INACTIVE,
    });
  }
}
