import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('t_employee_documents')
export class DocumentType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  file_path: string;

  @Column({ type: 'boolean', default: false })
  is_active: string;
}
