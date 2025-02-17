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

  create(createDocumentDto) {
    return 'This action adds a new document';
  }

  findMyDocs(id: number) {
    return this.employeeDocumentRepository.find({
      relations: ['documentType'],
      where: { employee: { id: id } },
    });
  }
}
