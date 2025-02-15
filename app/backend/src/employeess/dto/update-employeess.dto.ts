import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeessDto } from './create-employeess.dto';

export class UpdateEmployeessDto extends PartialType(CreateEmployeessDto) {}
