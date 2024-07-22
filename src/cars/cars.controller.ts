import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';


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
  getCarById( @Param('id', ParseIntPipe) id: number ){
    return this.carsService.findOneById( id );
  }

  @Delete(':id')
  deleteCarById(
    @Param('id', ParseIntPipe) id: number,
  ){
    return this.carsService.deleteOneById( id );
  }

  @Post()
  create(
    @Body() data: any,
  ){
    return {
      ok: true,
      method: 'POST',
      data,
    }
  }

  @Patch(':id')
  update(
    @Body() data: any,
    @Param('id', ParseIntPipe) id: number,
  ){
    return {
      ok: true,
      method: 'PATCH',
      data,
      id,
    }
  }

}