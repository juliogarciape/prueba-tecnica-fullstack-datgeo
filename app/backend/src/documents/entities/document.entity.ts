import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('t_document_types')
export class DocumentType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;
}
