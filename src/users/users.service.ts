import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Users } from "./users.entiry";
import { UsersDto, UsersInfo, UsersLoginDto } from "./usersDto";
import bcrypt = require("bcryptjs");
import { v4 } from "uuid";
import { STATUS } from "../constens";

@Injectable()
export class UsersService extends TypeOrmCrudService<Users> {
  constructor(@InjectRepository(Users) repo) {
    super(repo);
  }

  public async register(user: UsersDto): Promise<any> {
    const usersInfo = await this.repo.findOne({
      usersUsername: user.usersUsername,
    });
    if (usersInfo) {
      return false;
    }
    return await this.repo.save({
      ...user,
      usersPassword: bcrypt.hashSync(user.usersPassword, 10),
      usersUId: v4(),
      usersStatus: !!user.usersStatus,
    });
  }

  public async login(user: UsersLoginDto): Promise<Users | boolean> {
    const usersInfo = await this.repo.findOne({
      usersUsername: user.usersUsername,
    });
    if (!usersInfo) {
      return false;
    }
    if (!bcrypt.compareSync(user.usersPassword, usersInfo.usersPassword)) {
      return false;
    }
    Object.assign(usersInfo, {
      usersToken: v4(),
      usersUpdateDate: new Date(),
    });
    const res = await this.repo.save(usersInfo);
    if (!res) {
      return false;
    }
    return usersInfo;
  }

  public async delete(uid: string) {
    const usersInfo = await this.repo.findOne({ usersUId: uid });
    if (!usersInfo) {
      return false;
    }
    return await this.repo.save({
      usersId: usersInfo.usersId,
      usersStatus: STATUS.INACTIVE,
      usersUpdateDate: new Date(),
    });
  }

  public async update(user: UsersDto) {
    const usersInfo = await this.repo.findOne({
      usersUsername: user.usersUsername,
    });
    if (!usersInfo) {
      return false;
    }
    await this.repo.save({ ...usersInfo, usersUpdateDate: new Date() });
  }

  public async logout(uid: string) {
    const usersInfo = await this.repo.findOne({
      usersUId: uid,
    });
    if (!usersInfo) {
      return false;
    }
    return await this.repo.save({
      usersId: usersInfo.usersId,
      usersToken: null,
      usersUpdateDate: new Date(),
    });
  }
}
