import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {

  populateDb(){
    return 'SEED EXECUTED';
  }

}
