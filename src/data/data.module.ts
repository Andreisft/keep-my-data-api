import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DataController } from './controllers/data.controller';
import { Data, DataSchema } from './schemas/data.schema';
import { DataService } from './services/data.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Data.name,
        schema: DataSchema,
      },
    ]),
  ],
  controllers: [DataController],
  providers: [DataService],
})
export class DataModule {}
