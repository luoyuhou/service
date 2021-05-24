import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from "@nestjs/common";
import { ServiceConfigOutput, serviceConfigInput } from "./serviceDto";
import { ServiceService } from "./service.service";

@Controller("service")
export class ServiceController {
  constructor(private serviceService: ServiceService) {}

  @Get()
  public async index(@Param("key") key: string): Promise<ServiceConfigOutput> {
    const service = await this.serviceService.fetch(key);
    if (!service) {
      throw new NotFoundException();
    }
    return {
      host: service.serviceConfigHost,
      port: service.serviceConfigPort,
    };
  }

  @Post()
  public async service(@Body() param: serviceConfigInput) {
    return this.serviceService.save(param);
  }
}
