import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserSeeder } from 'seed/user.seeder';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const userSeeder = app.get(UserSeeder);
  await userSeeder.run();
  await app.listen(process.env.PORT ?? 3001);
}

bootstrap();
