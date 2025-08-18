import { Injectable } from '@nestjs/common';
// import { User } from './types';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { Profile } from '../profile/profile.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  getAllUsers() {
    return this.userRepository.find();
  }

  public async createUser(userDto: CreateUserDto) {
    // create a profile
    userDto.profile = userDto.profile ?? {};

    // create a user obj
    const user = this.userRepository.create(userDto);

    // save the user
    return await this.userRepository.save(user);
  }

  public async deleteUser(id: number) {
    //Find the user width given ID
    const user = await this.userRepository.findOneBy({ id });

    //Delete user
    await this.userRepository.delete(id);

    //Delete the profile
    if (user && user.profile) {
      await this.profileRepository.delete(user.profile.id);
    }

    //Send a response
    return { deleted: true };
  }
}
