import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UsePipes } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';


@Controller('cars')
export class CarsController {

  constructor(
    private readonly carsService: CarsService,
  ){}


  @Get()
  getAllCars(){
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById( @Param('id', ParseUUIDPipe) id: string ){
    return this.carsService.findOneById( id );
  }

  @Delete(':id')
  deleteCarById(
    @Param('id', ParseUUIDPipe) id: string,
  ){
    return this.carsService.deleteOneById( id );
  }

  @Post()
  @UsePipes()
  create(
    @Body() creatCarDto: CreateCarDto,
  ){
    return {
      ok: true,
      method: 'POST',
      creatCarDto,
    }
  }

  @Patch(':id')
  update(
    @Body() creatCarDto: CreateCarDto,
    @Param('id', ParseUUIDPipe) id: string,
  ){
    return {
      ok: true,
      method: 'PATCH',
      creatCarDto,
      id,
    }
  }

}
