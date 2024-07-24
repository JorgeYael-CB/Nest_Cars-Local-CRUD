import { v4 as uuid } from 'uuid';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Car } from './interfaces/car.interface';


@Injectable()
export class CarsService {

  private cars:Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla'
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic'
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee'
    },
  ];


  findAll(){
    return this.cars;
  }

  findOneById( id: string ){
    const car = this.cars.find( car => car.id === id );
    if( !car ) throw new BadRequestException(`Car with id: ${id} not found.`);

    return car;
  }

  deleteOneById( id: string ){
    const carId = this.findOneById( id );
    this.cars = this.cars.filter( car => car.id !== carId.id );

    return carId;
  }

}
