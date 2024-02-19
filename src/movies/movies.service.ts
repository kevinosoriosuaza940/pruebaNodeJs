import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie, MovieDocument } from './schemas/movie.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { identity } from 'rxjs';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(Movie.name) private readonly movieModel:
    Model<MovieDocument>,
  ){}


  async create(createMovieDto: CreateMovieDto): Promise<Movie> {


    return this.movieModel.create(createMovieDto);
  }

  async findAll() : Promise<Movie[]> {
    return this.movieModel.find().exec();
  }

  async findOne(id: string) : Promise<Movie> {
    return  this.movieModel.findById({ _id : id}).exec();
  }

  async update(id: string, updateMovieDto: UpdateMovieDto) : Promise<Movie> {
    return this.movieModel.findOneAndUpdate({_id :id}).exec();
  }

  remove(id: number) {
    return this.movieModel.findOneAndDelete({_id :id}).exec();
  }
}
