import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { EmployeeEntity } from 'src/users/entities/employeess.entity';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(EmployeeEntity)
    private employeeRepository: Repository<EmployeeEntity>,
  ) {}

  findByEmail(email: string) {
    return this.userRepository.findOne({
      where: { email },
      relations: ['employee'],
    });
  }

  async createUser(user: CreateUserDto) {
    const existUser = await this.userRepository.findOne({
      where: { email: user.email },
    });

    if (existUser) {
      return {
        error: true,
        message: 'El email ya fue registrado',
      };
    }

    const hashedPassword = bcrypt.hashSync(user.password, 10);
    const newUser = this.userRepository.create({
      ...user,
      password: hashedPassword,
    });

    const result = await this.userRepository.save(newUser);

    const employee = this.employeeRepository.create({
      job_title: user.job_title,
      salary: user.salary,
      identity_document: user.identity_document,
      user: result,
    });

    await this.employeeRepository.save(employee);

    return {
      error: false,
      message: 'Usuario registrado correctamente',
    };
  }

  findAll() {
    return this.userRepository.find({
      relations: ['employee'],
      where: { role: 'employee' },
    });
  }

  userInfo(email: string) {
    return this.userRepository.findOne({
      where: { email },
      relations: ['employee'],
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
