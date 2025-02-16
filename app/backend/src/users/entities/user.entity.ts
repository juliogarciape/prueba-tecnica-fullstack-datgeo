import { EmployeeEntity } from 'src/users/entities/employeess.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity({ name: 't_users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 100 })
  first_name: string;

  @Column({ length: 100 })
  last_name: string;

  @Column({ length: 255, unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'employee' })
  role: string;

  @OneToOne(() => EmployeeEntity, (employee) => employee.user)
  employee: EmployeeEntity;
}
