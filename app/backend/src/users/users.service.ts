import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
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

    return this.userRepository.save(newUser);
  }

  findAll() {
    return this.userRepository.find({
      relations: ['employee'],
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
