import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class serviceConfigInput {
  @IsNotEmpty({ message: "Key is cannot empty." })
  @IsString({ message: "Key is the string." })
  readonly serviceConfigKey: string;
  @IsNotEmpty({ message: "Host is cannot empty." })
  @IsString({ message: "Host is the string." })
  readonly serviceConfigHost: string;
  @IsNotEmpty({ message: "Port is cannot empty." })
  @IsString({ message: "Port is the string." })
  readonly serviceConfigPort: string;
  @IsNumber()
  readonly serviceConfigStatus: number;
}

export interface ServiceConfigOutput {
  host: string;
  port: number;
}
