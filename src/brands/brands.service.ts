import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';


@Injectable()
export class BrandsService {

  private brands:Brand[] = [
    // {
    //   id: uuid(),
    //   name: 'Toyota',
    //   createAt: new Date().getTime(),
    // },
  ];


  create(createBrandDto: CreateBrandDto) {
    const brand:Brand = {
      createAt: new Date().getTime(),
      id: uuid(),
      name: createBrandDto.name.toLowerCase(),
    }
    this.brands.push( brand );

    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find( brand => brand.id === id );
    if( !brand ) throw new BadRequestException(`Brand with id ${id} not found.`);

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brand = this.findOne( id );

    this.brands = this.brands.map( b => {
      if( b.id === brand.id ){
        brand = {
          ...brand,
          ...updateBrandDto,
        }

        return brand;
      };

      return b
    })

    return brand;
  }

  remove(id: string) {
    const brand = this.findOne( id );
    this.brands = this.brands.filter( b => b.id !== id );

    return brand;
  }

  fillBrandsWithSeedData( brands: Brand[] ){
    this.brands = brands;
  };
}
