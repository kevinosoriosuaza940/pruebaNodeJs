import { Category, CategoryDocument } from './schemas/category.schemas';
import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Request } from 'express';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private readonly categoryModel:
    Model<CategoryDocument>
  ){}

  async create(createCategoryDto: CreateCategoryDto) : Promise <Category>{
    return this.categoryModel.create(createCategoryDto);
  }

  async findAll() : Promise <Category[]> {
    return this.categoryModel.find().exec();
  }

  async findOne(id: string):  Promise<Category> {
    return this.categoryModel.findById({_id :id}).exec();
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) : Promise <Category> {
    return this.categoryModel.findByIdAndUpdate({_id: id} , updateCategoryDto).exec();
  }

  async remove(id: string) : Promise < Category>{
    return this.categoryModel.findByIdAndDelete({_id:id}).exec();
  }
}
