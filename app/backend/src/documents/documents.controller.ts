import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createDocumentDto) {
    return this.documentsService.create(createDocumentDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  findMyDocs(@Req() req: Request & { user?: { userId: number } }) {
    const id = req.user?.userId;
    return this.documentsService.findMyDocs(id as number);
  }
}
