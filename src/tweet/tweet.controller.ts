import { Body, Controller, Post } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { CreateTweetDto } from './dto/create-tweet.dto';

// req to /tweet

@Controller('tweet')
export class TweetController {
  constructor(private tweetService: TweetService) {}

  @Post()
  public CreateTweet(@Body() tweet: CreateTweetDto) {
    return this.tweetService.CreateTweet(tweet);
  }
}
