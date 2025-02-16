import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { EmployeeDocument } from './employee.entity';

@Entity('t_document_types')
export class DocumentType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 100 })
  name: string;

  @OneToMany(
    () => EmployeeDocument,
    (employeeDocument) => employeeDocument.documentType,
  )
  employeeDocuments: EmployeeDocument[];
}
