import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Patch,
  Param,
  Body,
  UsePipes,
  ParseIntPipe,
  // Query,
} from '@nestjs/common';
import { ResidentService } from './resident.service';
// import { DeleteUserDto } from './resident.dto';

@Controller('resident')
export class residentController {
  constructor(private readonly residentService: ResidentService) {}

  @Post('adduser')
  addUser(@Body() myobj): any {
    return this.residentService.addUser(myobj);
  }

  @Get('getuser')
  getUsers(): object {
    return this.residentService.getUsers();
  }

  @Delete('deleteuser/:id')
  deleteUser(@Param('id', ParseIntPipe) id: number): any {
    return this.residentService.deleteUser(id);
  }

  @Put('updateuser/:id')
  updateUser(@Param('id') id: string, @Body() myobj): any {
    return this.residentService.updateUser(id, myobj);
  }

  @Patch('updateUserInfo/:id')
  updateUserInfo(@Param('id') id: string, @Body() myobj): any {
    return this.residentService.updateUserInfo(id, myobj);
  }

  @Get('getuser/:id')
  getUserById(@Param('id') id: string): object {
    return this.residentService.getUserById(id);
  }

  // @Get('users/')
  // getUsersByNameAndId(
  //   @Query('name') name: string,
  //   @Query('id') id: string,
  // ): object {
  //   return this.residentService.getUsersByNameAndId(name, id);
  // }
}
