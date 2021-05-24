import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ServiceConfig } from "./service.entity";
import { ServiceController } from "./service.controller";
import { ServiceService } from "./service.service";

@Module({
  imports: [TypeOrmModule.forFeature([ServiceConfig])],
  controllers: [ServiceController],
  providers: [ServiceService],
  exports: [ServiceService],
})
export class ServiceModule {}
