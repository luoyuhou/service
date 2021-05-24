import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { ServiceModule } from "./service/service.module";
import { UsersLogsModule } from "./users-logs/users-logs.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { withCache } from "../orm.config";

@Module({
  imports: [
    TypeOrmModule.forRoot(withCache),
    UsersModule,
    ServiceModule,
    UsersLogsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
