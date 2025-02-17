import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeEntity } from 'src/users/entities/employeess.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { DocumentType } from 'src/documents/entities/document.entity';

@Injectable()
export class Seeder {
  private email = 'cesar@gmail.com';

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(EmployeeEntity)
    private employeeRepository: Repository<EmployeeEntity>,
    @InjectRepository(DocumentType)
    private documentRepository: Repository<DocumentType>,
  ) {}

  async run(): Promise<void> {
    const exists = await this.userRepository.findOneBy({
      email: this.email,
    });

    if (!exists) {
      const hashedPassword = await bcrypt.hash('123', 10);

      const user = this.userRepository.create({
        first_name: 'Cesar',
        last_name: 'Garcia',
        email: this.email,
        password: hashedPassword,
        role: 'admin',
      });

      const result = await this.userRepository.save(user);

      const employee = this.employeeRepository.create({
        user: result,
        job_title: 'Full Stack Developer',
        identity_document: '123456789',
        salary: 4500,
      });

      await this.employeeRepository.save(employee);

      await this.documentRepository.insert([
        {
          name: 'Documento de Identidad',
        },
        {
          name: 'Licencia de Conducir',
        },
        {
          name: 'Curriculum Vitae',
        },
      ]);

      console.log('🌱 El Seed fue ejecutado correctamente.');
    } else {
      console.log('❌ El Seed ya fue ejecutado.');
    }
  }
}
