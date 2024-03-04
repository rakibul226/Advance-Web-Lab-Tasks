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
  ValidationPipe,
  // Query,
} from '@nestjs/common';
import { ResidentService } from './resident.service';
import { AddResidentDTO } from './resident.dto';
// import { DeleteUserDto } from './resident.dto';

@Controller('resident')
export class residentController {
  constructor(private readonly residentService: ResidentService) {}

  @Post('/createuser')
  @UsePipes(ValidationPipe)
  addResident(@Body() addResidentDTO: AddResidentDTO): any {
    return this.residentService.addResident(addResidentDTO);
  }

  @Patch('/:id/updatestatus')
  @UsePipes(ValidationPipe)
  updateResidentStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateResidentStatusDTO: UpdateResidentStatusDTO,
  ): any {
    return this.residentService.updateResidentStatus(
      id,
      updateResidentStatusDTO.status,
    );
  }

  // ------------------------------------------------------------------------------------------
  // @Post('adduser')
  // addUser(@Body() myobj): any {
  //   return this.residentService.addUser(myobj);
  // }

  // @Get('getuser')
  // getUsers(): object {
  //   return this.residentService.getUsers();
  // }

  // @Delete('deleteuser/:id')
  // deleteUser(@Param('id', ParseIntPipe) id: number): any {
  //   return this.residentService.deleteUser(id);
  // }

  // @Put('updateuser/:id')
  // updateUser(@Param('id') id: string, @Body() myobj): any {
  //   return this.residentService.updateUser(id, myobj);
  // }

  // @Patch('updateUserInfo/:id')
  // updateUserInfo(@Param('id') id: string, @Body() myobj): any {
  //   return this.residentService.updateUserInfo(id, myobj);
  // }

  // @Get('getuser/:id')
  // getUserById(@Param('id') id: string): object {
  //   return this.residentService.getUserById(id);
  // }

  // @Get('users/')
  // getUsersByNameAndId(
  //   @Query('name') name: string,
  //   @Query('id') id: string,
  // ): object {
  //   return this.residentService.getUsersByNameAndId(name, id);
  // }
}
