import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateTweetDto {
  @IsNotEmpty()
  @IsString()
  text: string;

  @IsOptional()
  image?: string;

  @IsNotEmpty()
  @IsInt()
  userId: number;
}
