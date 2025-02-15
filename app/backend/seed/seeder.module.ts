import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { UserSeeder } from './user.seeder';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])], // Registramos la entidad User
  providers: [UserSeeder],
  exports: [UserSeeder], // Para que pueda ser usado en otros módulos
})
export class DatabaseModule {}
