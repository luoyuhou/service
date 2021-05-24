import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersLogs } from "./users-logs.entity";
import { UsersLogsController } from "./users-logs.controller";
import { UsersLogsService } from "./users-logs.service";

@Module({
  imports: [TypeOrmModule.forFeature([UsersLogs])],
  controllers: [UsersLogsController],
  providers: [UsersLogsService],
  exports: [UsersLogsService],
})
export class UsersLogsModule {}
