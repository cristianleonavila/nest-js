import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {

    private data =  [
        {
            id: 1,
            brand: 'Toyota',
            model: 'A'
        },
        {
            id: 2,
            brand: 'Chevrolet',
            model: 'B'
        },
        {
            id: 3,
            brand: 'Honda',
            model: 'C'
        }
    ]

    findAll() {
        return this.data;
    }

    findById( id: number) {
        return this.data.find((car) => car.id == id) ?? {};
    }

}
