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
  NotFoundException,
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

  @Patch(':id/status')
  async updateStatus(
    @Param('id') id: number,
    @Body('status') newStatus: string,
  ): Promise<any> {
    try {
      const updatedResident = await this.residentService.updateStatus(
        id,
        newStatus,
      );
      return { message: 'Status updated successfully', updatedResident };
    } catch (error) {
      if (error instanceof NotFoundException) {
        return { message: error.message };
      }
      throw error;
    }
  }

  // New endpoint to get users older than 40
  @Get('/olderThan40')
  async getUsersOlderThan40(): Promise<any> {
    try {
      const usersOlderThan40 = await this.residentService.getUsersOlderThan40();
      return { usersOlderThan40 };
    } catch (error) {
      if (error instanceof NotFoundException) {
        return { message: error.message }; // Return only the message
      }
      throw error; // Re-throw other errors
    }
  }

  @Get('/inactiveUsers')
  async getInactiveUsers(): Promise<any> {
    try {
      const inactiveUsers =
        await this.residentService.getUsersByStatus('inactive');
      return { inactiveUsers };
    } catch (error) {
      if (error instanceof NotFoundException) {
        return { message: error.message };
      }
      throw error;
    }
  }
}

// @Post(':id/changeStatus')
// async changeStatus(
//   @Param('id') id: number,
//   @Body('status') newStatus: string,
// ): Promise<any> {
//   const updatedResident = await this.residentService.changeStatus(
//     id,
//     newStatus,
//   );
//   return { message: 'Status updated successfully', updatedResident };
// }
// }

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
