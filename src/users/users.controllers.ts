import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
// import { UpdateUserDto } from 'src/dtos/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    console.log('jm: attempting to get all users');

    return this.usersService.getAllUsers();
  }

  @Post()
  createUser(
    @Body()
    user: CreateUserDto,
  ) {
    console.log(
      'jm: attempting to creating a new user with details ' +
        JSON.stringify(user),
    );
    const response = this.usersService.createUser(user);

    return response;
  }
}
