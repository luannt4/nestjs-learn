import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
// import { UpdateUserDto } from 'src/dtos/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getAllUsers();
  }

  @Post()
  createUser(
    @Body()
    user: CreateUserDto,
  ) {
    const response = this.usersService.createUser(user);
    return response;
  }

  @Delete(':id')
  public deleteUser(@Param('id', ParseIntPipe) id: number) {
    this.usersService.deleteUser(id);
  }
}
