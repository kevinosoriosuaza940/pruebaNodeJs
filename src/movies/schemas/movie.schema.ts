import { Schema, Prop , SchemaFactory } from "@nestjs/mongoose";
import { Document  } from "mongoose";


export type MovieDocument = Movie & Document

@Schema()
export class Movie {
   @Prop()
   name: string  
   
   @Prop()
   description: string  
   
   @Prop()
   score: number

   @Prop()
   duration: number

   @Prop()
   category: string

}

export const MovieSchema = SchemaFactory.createForClass(Movie);