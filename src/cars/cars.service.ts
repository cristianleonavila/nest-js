import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDTO, UpdateCarDTO } from './dto';


@Injectable()
export class CarsService {

    private data:Car[] =  [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'A'
        },
        {
            id: uuid(),
            brand: 'Chevrolet',
            model: 'B'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'C'
        }
    ]

    findAll() {
        return this.data;
    }

    findById( id: string) {
        const car = this.data.find((car) => car.id == id);
        if ( !car ) {
            throw new NotFoundException(`Car id: ${id} not found`);
        }
        return car;
    }

    create(carDTO: CreateCarDTO) {
        const car: Car = {
            id: uuid(),
            ...carDTO
        };
        this.data.push(car);
        return car;
    }

    update(id: string, updateDTO: UpdateCarDTO) {
        let oldCar = this.findById(id);
        this.data = this.data.map(car => {
            if ( car.id === id ) {
                oldCar = {
                    ...oldCar,
                    ...updateDTO,
                    id
                };
                return oldCar;
            }
            return car;
        });
        return oldCar;
    }

}
