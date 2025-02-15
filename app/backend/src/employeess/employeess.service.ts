import { Injectable } from '@nestjs/common';
import { CreateEmployeessDto } from './dto/create-employeess.dto';
import { UpdateEmployeessDto } from './dto/update-employeess.dto';

@Injectable()
export class EmployeessService {
  create(createEmployeessDto: CreateEmployeessDto) {
    return 'This action adds a new employeess';
  }

  findAll() {
    return `This action returns all employeess`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employeess`;
  }

  update(id: number, updateEmployeessDto: UpdateEmployeessDto) {
    return `This action updates a #${id} employeess`;
  }

  remove(id: number) {
    return `This action removes a #${id} employeess`;
  }
}
