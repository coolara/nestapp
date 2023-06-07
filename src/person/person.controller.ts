import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { CreatePersonDto } from './dto/create-person.dto';
import { AaaInterceptor } from '../aaa/aaa.interceptor';

@Controller('api/person')
export class PersonController {
  @Get('aaa')
  @UseInterceptors(AaaInterceptor)
  body2(@Body() createPersonDto: CreatePersonDto) {
    return undefined;
  }
}
