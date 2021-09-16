import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// Schema

import { Data } from '../schemas/data.schema';

// Dto

import { CreateDataDto } from '../dto/create-data.dto';
import { FindDataDto } from '../dto/find-data.dto';

@Injectable()
export class DataService {
  constructor(
    @InjectModel(Data.name) private readonly dataModel: Model<Data>,
  ) {}

  async createData(createDataDto: CreateDataDto) {
    const data = new this.dataModel(createDataDto);

    return data.save();
  }

  async findData(findDataDto?: FindDataDto) {
    return this.dataModel.find(findDataDto);
  }

  async deleteData(id: string) {
    return this.dataModel.findByIdAndDelete(id);
  }
}
