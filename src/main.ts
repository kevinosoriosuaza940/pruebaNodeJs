import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder ,  SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new  DocumentBuilder()
    .setTitle('Mongo Movies Rest API')
    .setDescription('API Rest para peliculas')
    .setVersion('1.0')
    .build();

    const document = SwaggerModule.createDocument(app ,options);

    SwaggerModule.setup('docs', app, document );
    
  await app.listen(3000);
}
bootstrap();
