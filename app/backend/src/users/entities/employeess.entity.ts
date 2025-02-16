import { EmployeeDocument } from 'src/documents/entities/employee.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity('t_employees')
export class EmployeeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => UserEntity, (user) => user.employee, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @Column({ length: 100 })
  job_title: string;

  @Column({ length: 20 })
  identity_document: string;

  @Column('decimal', { precision: 10, scale: 2 })
  salary: number;

  @OneToMany(
    () => EmployeeDocument,
    (employeeDocument) => employeeDocument.employee,
  )
  employeeDocuments: EmployeeDocument[];
}
