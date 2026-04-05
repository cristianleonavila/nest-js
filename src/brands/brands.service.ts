import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [];

  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name,
      createdAt: new Date().getTime()
    };
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);
    if ( !brand ) throw new NotFoundException(`Brand id: ${id} not found`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let oldBrand = this.findOne(id);
    this.brands = this.brands.map(brand => {
      if (brand.id === id) {
        oldBrand.updatedAt = new Date().getTime(),
        oldBrand = { ...oldBrand, ...updateBrandDto};
        return oldBrand;
      }
      return brand;
    });
    return oldBrand;
  }

  remove(id: string) {
    this.brands = this.brands.filter(brand => brand.id !== id);
  }

  loadData(brands: Brand[]) {
    this.brands = brands;
  }
}
