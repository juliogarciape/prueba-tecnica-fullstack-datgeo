import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { EmployeeEntity } from 'src/users/entities/employeess.entity';
import { Seeder } from './seeder';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, EmployeeEntity])],
  providers: [Seeder],
  exports: [Seeder],
})
export class DatabaseModule {}
