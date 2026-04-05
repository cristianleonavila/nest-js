import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from '../brands/brands.service';
import { CARS_SEED } from './data/cars.seed';
import { BRAND_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {

  constructor(
    private carsService: CarsService,
    private brandService: BrandsService
  ) {

  }

  runSeed() {
    this.carsService.loadData(CARS_SEED);
    this.brandService.loadData(BRAND_SEED);
  }
}
