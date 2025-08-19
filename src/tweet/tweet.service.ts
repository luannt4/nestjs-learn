import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { Tweet } from './tweet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTweetDto } from './dto/create-tweet.dto';

@Injectable()
export class TweetService {
  constructor(
    private readonly userService: UsersService,
    @InjectRepository(Tweet)
    private readonly tweetRepository: Repository<Tweet>,
  ) {}

  public async getTweets(userId: number) {
    return await this.tweetRepository.find({
      where: { user: { id: userId } },
      relations: { user: true },
    });
  }

  public async CreateTweet(createTweetDto: CreateTweetDto) {
    //Find user with the given userid form user table
    const user = await this.userService.FindUserById(createTweetDto.userId);

    //Create a tweet
    const tweet = this.tweetRepository.create({
      ...createTweetDto,
      user,
    });

    //Save the tweet
    return await this.tweetRepository.save(tweet);
  }
}
