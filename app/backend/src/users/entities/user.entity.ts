import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 't_users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: 'employee' })
  role: string;
}
