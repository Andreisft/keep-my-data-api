import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDataDto {
  @IsString()
  label: string;

  @IsString()
  value: string;
}
