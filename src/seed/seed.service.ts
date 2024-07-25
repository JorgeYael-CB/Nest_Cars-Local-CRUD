import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { carsSeed } from './data/cars.seed';
import { brandSeed } from './data/brands.seed';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandService: BrandsService,
  ){}


  populateDb(){
    this.carsService.fillCarsWithSeedData( carsSeed );
    this.brandService.fillBrandsWithSeedData( brandSeed );

    return 'SEED EXECUTED';
  }

}
