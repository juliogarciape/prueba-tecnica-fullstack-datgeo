import { Module } from '@nestjs/common';
import { EmployeessService } from './employeess.service';
import { EmployeessController } from './employeess.controller';

@Module({
  controllers: [EmployeessController],
  providers: [EmployeessService],
})
export class EmployeessModule {}
