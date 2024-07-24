import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UsePipes } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';


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
  create(
    @Body() creatCarDto: CreateCarDto,
  ){
    return this.carsService.create(creatCarDto);
  }

  @Patch(':id')
  update(
    @Body() updateCarDto: UpdateCarDto,
    @Param('id', ParseUUIDPipe) id: string,
  ){
    return this.carsService.update( updateCarDto, id );
  }

}
