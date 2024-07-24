import { IsString, MaxLength, MinLength } from "class-validator";



export class CreateCarDto {

  @IsString()
  @MinLength(2)
  @MaxLength(100)
  readonly brand: string;

  @IsString()
  @MinLength(3)
  @MaxLength(100)
  readonly model: string;
};
