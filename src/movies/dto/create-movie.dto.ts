import { ApiProperty } from "@nestjs/swagger";

export class CreateMovieDto {
    @ApiProperty({
        example:' Simpsons movie',
    })
    readonly name : string;

    @ApiProperty({
        example:'Lorem Ipsum is simply dummy text of the printing and t'
    })
    readonly description : string;
    
    @ApiProperty({
        example:5
    })
    readonly score : number;    
    
    @ApiProperty({
        example: 108
    })
    readonly duration : number;

    @ApiProperty({
        example: 'Comedy Movies'
    })
    readonly category : string;
}

