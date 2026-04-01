import { Controller, Get, Param } from '@nestjs/common';
import { get } from 'http';

@Controller('cars')
export class CarsController {

    private cars =  ['Toyota', 'Chevete', 'Honda']

    @Get()
    getAllCars() {
        return this.cars;
    }

    @Get(':id')
    getCarById( @Param('id') id ) {
        return this.cars[id];
    }
}
