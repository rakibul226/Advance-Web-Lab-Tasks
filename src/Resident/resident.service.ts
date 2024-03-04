import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResidentEntity } from './resident.entity';
import { Repository } from 'typeorm';
import { AddResidentDTO } from './resident.dto';

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
    id: number,
    status: 'active' | 'inactive',
  ): Promise<Resident> {
    const resident = await this.findById(id);
    if (!resident) throw new Error(`Resident with ID ${id} not found.`);
    resident.status = status;
    await resident.save();
    return resident;
  }
}

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
