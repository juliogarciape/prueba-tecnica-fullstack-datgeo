import { Module } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { DocumentsController } from './documents.controller';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentType } from './entities/document.entity';
import { EmployeeDocument } from './entities/employee.entity';
import { S3Service } from 'src/services/s3.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([DocumentType, EmployeeDocument]),
    AuthModule,
  ],
  controllers: [DocumentsController],
  providers: [DocumentsService, S3Service],
  exports: [DocumentsService],
})
export class DocumentsModule {}
