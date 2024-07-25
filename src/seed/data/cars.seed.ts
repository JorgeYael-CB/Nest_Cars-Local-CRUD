import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from "uuid";


export const carsSeed:Car[] = [
  {
    brand: 'Toyota',
    id: uuid(),
    model: 'Corolla',
  },
  {
    brand: 'Honda',
    id: uuid(),
    model: 'Civic',
  },
  {
    brand: 'Jeep',
    id: uuid(),
    model: 'Cheroke',
  },
]
