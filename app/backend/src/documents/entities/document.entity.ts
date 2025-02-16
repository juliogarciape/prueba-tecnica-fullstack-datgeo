import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('t_document_types')
export class DocumentType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 100 })
  name: string;
}
