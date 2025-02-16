import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Seeder } from 'seed/seeder';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const seeder = app.get(Seeder);
  await seeder.run();
  await app.listen(process.env.PORT ?? 3001);
}

bootstrap();
