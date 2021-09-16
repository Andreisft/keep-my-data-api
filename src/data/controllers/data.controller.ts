import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { DataService } from '../services/data.service';
import { CreateDataDto } from '../dto/create-data.dto';
import { FindDataDto } from '../dto/find-data.dto';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Post()
  async createData(@Body() createDataDto: CreateDataDto) {
    return this.dataService.createData(createDataDto);
  }

  @Get()
  async findData(@Query() findDataDto: FindDataDto) {
    return this.dataService.findData(findDataDto);
  }

  @Delete(':id')
  async deleteData(@Param('id') id: string) {
    return this.dataService.deleteData(id);
  }
}
