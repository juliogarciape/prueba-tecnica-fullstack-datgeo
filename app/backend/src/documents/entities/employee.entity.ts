import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { DocumentType } from './document.entity';
import { EmployeeEntity } from 'src/employeess/entities/employeess.entity';

@Entity('t_employee_documents')
export class EmployeeDocument {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => DocumentType,
    (documentType) => documentType.employeeDocuments,
  )
  documentType: DocumentType;

  @ManyToOne(() => EmployeeEntity, (employee) => employee.employeeDocuments)
  employee: EmployeeEntity;

  @Column()
  file_path: string;

  @Column({ type: 'boolean', default: false })
  is_active: string;
}
