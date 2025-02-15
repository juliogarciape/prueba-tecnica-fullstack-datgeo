import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserSeeder {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
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

      await this.userRepository.save(user);
      console.log('✅ El usuario administrador fue creado.');
    } else {
      console.log('❌ El usuario administrador ya existe.');
    }
  }
}
