import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DocumentType } from './entities/document.entity';
import { Repository } from 'typeorm';
import { EmployeeDocument } from './entities/employee.entity';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectRepository(DocumentType)
    private documentRepository: Repository<DocumentType>,
    @InjectRepository(EmployeeDocument)
    private employeeDocumentRepository: Repository<EmployeeDocument>,
  ) {}

  async create(id: number, type: number, url: string) {
    try {
      const document = this.employeeDocumentRepository.create({
        employee: { id: id },
        documentType: { id: type },
        file_path: url,
      });

      await this.employeeDocumentRepository.save(document);

      return {
        message: 'Documento subido exitosamente',
        error: false,
      };
    } catch (error) {
      return {
        message: 'Error al subir el documento',
        error: true,
      };
    }
  }

  findMyDocs(id: number) {
    return this.employeeDocumentRepository.find({
      relations: ['documentType'],
      where: { employee: { id: id } },
    });
  }
}
