import { IsNotEmpty, IsString, Length } from "class-validator";

export class UsersLogsDto {
  @IsNotEmpty({ message: "Uid cannot empty." })
  @IsString({ message: "Uid is the string." })
  @Length(0, 64)
  readonly uid: string;
  @IsNotEmpty({ message: "Ip cannot empty." })
  @IsString({ message: "Ip is the string." })
  readonly ip: string;
  @IsNotEmpty({ message: "Content cannot empty." })
  @IsString({ message: "Content is the string." })
  readonly content: string;
  readonly agent?: string;
}

export class UsersLoginDto {
  @IsNotEmpty({ message: "Username cannot empty." })
  @IsString({ message: "Username is the string." })
  usersUsername: string;
  @IsNotEmpty({ message: "Username cannot empty." })
  @IsString({ message: "Username is the string." })
  usersPassword: string;
}

export class UsersInfo {
  uid: string;
  username: string;
  email: string | null;
  avatar: string | null;
  token: string;
  create_date: Date;
  update_date: Date;
}
