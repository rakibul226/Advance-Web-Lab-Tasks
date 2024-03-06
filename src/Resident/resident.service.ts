import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResidentEntity } from './resident.entity';
import { MoreThan, Repository } from 'typeorm';
import { AddResidentDTO } from './resident.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class ResidentService {
  constructor(
    @InjectRepository(ResidentEntity)
    private residentRepo: Repository<ResidentEntity>,
  ) {}

  async addResident(addResidentDTO: AddResidentDTO): Promise<ResidentEntity[]> {
    const newResident = new ResidentEntity();
    newResident.fullName = addResidentDTO.fullName;
    newResident.age = addResidentDTO.age;
    newResident.status = addResidentDTO.status;

    const res = await this.residentRepo.save(newResident);
    return [res];
  }

  async updateStatus(
    userId: number,
    newStatus: string,
  ): Promise<ResidentEntity> {
    const resident = await this.residentRepo.findOne({ where: { id: userId } });
    if (!resident) {
      throw new NotFoundException(`Resident with ID ${userId} not found`);
    }
    resident.status = newStatus;
    return await this.residentRepo.save(resident);
  }

  async getUsersOlderThan40(): Promise<ResidentEntity[]> {
    // Fetch users older than 40 from the database
    const usersOlderThan40 = await this.residentRepo.find({
      where: { age: MoreThan(40) }, // Assuming there's an 'age' property in your Resident entity
    });

    // If no users found, throw NotFoundException
    if (!usersOlderThan40 || usersOlderThan40.length === 0) {
      throw new NotFoundException('No users older than 40 found');
    }
    return usersOlderThan40;
  }

  async getUsersByStatus(status: string): Promise<ResidentEntity[]> {
    // Fetch users by status from the database
    const users = await this.residentRepo.find({ where: { status } });

    // If no users found, throw NotFoundException
    if (!users || users.length === 0) {
      throw new NotFoundException(`No users with '${status}' status found`);
    }

    return users;
  }

  // async changeStatus(
  //   userId: number,
  //   newStatus: string,
  // ): Promise<ResidentEntity> {
  //   const resident = await this.residentRepo.findOne({ where: { id: userId } });
  //   if (!resident) {
  //     throw new NotFoundException(`Resident with ID ${userId} not found`);
  //   }
  //   resident.status = newStatus;
  //   return await this.residentRepo.save(resident);
  // }

  // import { Injectable } from '@nestjs/common';
  // import { InjectRepository } from '@nestjs/typeorm';
  // import { ResidentEntity } from './resident.entity';
  // import { Repository } from 'typeorm';
  // import { AddResidentDTO } from './resident.dto';

  // @Injectable()
  // export class ResidentService {
  //   constructor(
  //     @InjectRepository(ResidentEntity)
  //     private residentRepo: Repository<ResidentEntity>,
  //   ) {}
  //   // ------------------------------------------------------------------------------------------
  //   async addResident(addResidentDTO: AddResidentDTO): Promise<ResidentEntity[]> {
  //     // const name = addResidentDTO.name;
  //     // const email = addResidentDTO.email;
  //     // const password = addResidentDTO.password;
  //     // const gender = addResidentDTO.gender;
  //     // const phoneNumber = addResidentDTO.phoneNumber;
  //     const fullName = addResidentDTO.fullName;
  //     const age = addResidentDTO.age;
  //     const status = addResidentDTO.status;

  //     const res = await this.residentRepo.save(addResidentDTO);
  //     const residents: ResidentEntity[] = [res];
  //     return residents;
  //   }

  // addResident(addResidentDTO): any {
  //   return addResidentDTO;
  // }

  // addUser(myobj): any {
  //   return myobj;
  // }

  // getUsers(): object {
  //   return { message: 'users' };
  // }

  // deleteUser(id: number): any {
  //   return { message: `User with id ${id} deleted` };
  // }

  // updateUser(id: string, myobj): any {
  //   return `User updated by id ${id} name${myobj.name}`;
  // }

  // updateUserInfo(id: string, myobj): any {
  //   return ` info updated for  ${myobj.name}`;
  // }

  // getUserById(id: string): object {
  //   return { message: `Get user  by id ${id}` };
  // }

  //   getUsersByNameAndId(name: string, id: string): object {
  //     return { message: 'You id is ' + name + ' and your id is ' + id };
  //   }
}
