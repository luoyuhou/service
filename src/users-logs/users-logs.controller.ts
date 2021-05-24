import { Body, Controller, Post, Ip } from "@nestjs/common";
import { UsersLogsService } from "./users-logs.service";

@Controller("users-logs")
export class UsersLogsController {
  constructor(private readonly usersLogsService: UsersLogsService) {}

  @Post("find")
  public async fetch(@Body() param: any) {
    return await this.usersLogsService.fetch(param.uid);
  }

  @Post("save")
  public async save(@Body() param: any, @Ip() ip: string) {
    return await this.usersLogsService.insert({
      uid: param.uid,
      ip,
      content: param.content,
      agent: param.agent,
    });
  }
}
