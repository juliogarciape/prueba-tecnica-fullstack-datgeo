import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeEntity } from 'src/employeess/entities/employeess.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class Seeder {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(EmployeeEntity)
    private employeeRepository: Repository<EmployeeEntity>,
  ) {}

  async run(): Promise<void> {
    const exists = await this.userRepository.findOneBy({
      email: 'cesar@datgeo.com',
    });

    if (!exists) {
      //const hashedPassword = await bcrypt.hash("admin123", 10); // Encriptar contraseña

      const user = this.userRepository.create({
        first_name: 'Cesar',
        last_name: 'Garcia',
        email: 'cesar@datgeo.com',
        password: 'hashedPassword',
        role: 'admin',
      });

      const result = await this.userRepository.save(user);

      const employee = this.employeeRepository.create({
        user: result,
        job_title: 'Full Stack Developer',
        salary: 4500,
      });

      await this.employeeRepository.save(employee);

      console.log('🌱 El Seed fue ejecutado correctamente.');
    } else {
      console.log('❌ El Seed ya fue ejecutado.');
    }
  }
}
