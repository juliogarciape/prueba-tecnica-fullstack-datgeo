import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Req,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { S3Service } from 'src/services/s3.service';

@Controller('documents')
export class DocumentsController {
  constructor(
    private readonly documentsService: DocumentsService,
    private readonly s3Service: S3Service,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Req() req: Request & { user?: { userId: number } },
    @UploadedFile() file: any,
    @Body() body: { type: string },
  ) {
    const id = req.user?.userId;
    const type = parseInt(body.type, 10);
    let pathUrl = await this.s3Service.uploadFile(file);
    pathUrl = pathUrl.replace(
      'https://prueba-tecnica-datgeo.s3.amazonaws.com/',
      '',
    );
    return this.documentsService.create(id as number, type, pathUrl);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  findMyDocs(@Req() req: Request & { user?: { userId: number } }) {
    const id = req.user?.userId;
    return this.documentsService.findMyDocs(id as number);
  }
}
