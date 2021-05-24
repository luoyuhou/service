import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { getConnectionOptions, createConnection } from "typeorm";

async function bootstrap() {
  const appOptions = { cors: true };
  const app = await NestFactory.create(AppModule, appOptions);
  app.setGlobalPrefix("api");

  const options = new DocumentBuilder()
    .setTitle("NestJS Example App")
    .setDescription("The API description")
    .setVersion("1.0")
    .setBasePath("api")
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("/docs", app, document);

  await app.listen(3000);
}

const connectDB = async () => {
  const connectionOptions = await getConnectionOptions();
  return await createConnection(connectionOptions);
};
bootstrap();
