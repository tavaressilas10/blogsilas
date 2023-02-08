import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  process.env.TZ= '-03:00';
  const config = new DocumentBuilder()
  .setTitle('Blog Pessoal Silas Tavares')
  .setDescription('Projeto Blog Pessoal Silas')
  .setContact("Silas Tavares Maciel","https://github.com/tavaressilas10","https://www.linkedin.com/in/tavaressilas/")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors()
  await app.listen(process.env.PORT || 4000);
}
bootstrap();
