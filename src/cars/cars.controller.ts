import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { UpdateCarDTO, CreateCarDTO } from './dto';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ) {

    }

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById( @Param('id', ParseUUIDPipe) id:string ) {
        return this.carsService.findById(id);
    }

     @Post() 
     create(@Body() body: CreateCarDTO) {
        return this.carsService.create(body);
     }

     @Patch(':id')
     updateCar(
        @Param('id', ParseUUIDPipe) id, 
        @Body() updateDTO: UpdateCarDTO) {

        return this.carsService.update(id, updateDTO);
     }

     @Delete(':id')
     deleteCar(@Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.delete(id);
     }
}
