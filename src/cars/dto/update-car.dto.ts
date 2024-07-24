import { IsOptional, IsString, MaxLength, MinLength } from "class-validator";



export class UpdateCarDto {
  @IsString()
  @IsOptional()
  @MinLength(2)
  @MaxLength(100)
  brand?: string;

  @IsString()
  @IsOptional()
  @MinLength(2)
  @MaxLength(100)
  model?: string;
}
