import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator";

export class UsersDto {
  @IsNotEmpty({ message: "Uid cannot empty." })
  @IsString({ message: "Uid is the string." })
  @Length(0, 64)
  readonly UsersUId: string;
  @IsNotEmpty({ message: "Username cannot empty." })
  @IsString({ message: "Username is the string." })
  usersUsername: string;
  @IsNotEmpty({ message: "Username cannot empty." })
  @IsString({ message: "Username is the string." })
  usersPassword: string;
  @IsNumber()
  readonly usersStatus: number;
  readonly usersEmail?: string;
  readonly usersAvatar?: string;
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
