import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeessService } from './employeess.service';
import { CreateEmployeessDto } from './dto/create-employeess.dto';
import { UpdateEmployeessDto } from './dto/update-employeess.dto';

@Controller('employeess')
export class EmployeessController {
  constructor(private readonly employeessService: EmployeessService) {}

  @Post()
  create(@Body() createEmployeessDto: CreateEmployeessDto) {
    return this.employeessService.create(createEmployeessDto);
  }

  @Get()
  findAll() {
    return this.employeessService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeessService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeessDto: UpdateEmployeessDto) {
    return this.employeessService.update(+id, updateEmployeessDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeessService.remove(+id);
  }
}
