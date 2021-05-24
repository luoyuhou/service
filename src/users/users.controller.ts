import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersDto, UsersInfo, UsersLoginDto } from "./usersDto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get("logout")
  public async logout(@Param("uid") uid: string): Promise<boolean> {
    const res = await this.usersService.logout(uid);
    if (!res) {
      throw new ForbiddenException();
    }
    return true;
  }

  @Post("register")
  public async register(@Body() user: UsersDto): Promise<boolean> {
    const res = await this.usersService.register(user);
    if (!res) {
      throw new ForbiddenException();
    }
    return true;
  }

  @Post("login")
  public async login(@Body() user: UsersLoginDto): Promise<UsersInfo> {
    const usersInfo = await this.usersService.login(user);
    if (typeof usersInfo === "boolean") {
      throw new ForbiddenException();
    }
    return {
      uid: usersInfo.usersUId,
      username: usersInfo.usersUsername,
      email: usersInfo.usersEmail,
      avatar: usersInfo.usersAvatar,
      token: usersInfo.usersToken,
      create_date: usersInfo.usersCreateDate,
      update_date: usersInfo.usersUpdateDate,
    };
  }

  @Patch("update")
  public async update(@Body() user: UsersDto): Promise<boolean> {
    const res = await this.usersService.update(user);
    if (!res) {
      throw new ForbiddenException();
    }
    return true;
  }

  @Delete("delete")
  public async delete(@Param("uid") uid: string): Promise<boolean> {
    const res = await this.usersService.delete(uid);
    if (!res) {
      throw new ForbiddenException();
    }
    return true;
  }
}
