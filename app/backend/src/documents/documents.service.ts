import { Injectable } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';

@Injectable()
export class DocumentsService {
  create(createDocumentDto: CreateDocumentDto) {
    return 'This action adds a new document';
  }

  findOne(id: number) {
    return `This action returns a #${id} document`;
  }
}
