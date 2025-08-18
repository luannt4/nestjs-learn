import { Controller, Get } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly ProfileService: ProfileService) {}

  @Get()
  public getProfile() {
    return this.ProfileService.getAllProfiles();
  }
}
