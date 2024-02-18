import { Injectable } from '@nestjs/common';

@Injectable()
export class ResidentService {
  addUser(myobj): any {
    return myobj;
  }

  getUsers(): object {
    return { message: 'users' };
  }

  deleteUser(id: string): object {
    return { message: `User with id ${id} deleted` };
  }

  updateUser(id: string, myobj): any {
    return `User updated by id ${id} name${myobj.name}`;
  }

  updateUserInfo(id: string, myobj): any {
    return ` info updated for  ${myobj.name}`;
  }

  getUserById(id: string): object {
    return { message: `Get user  by id ${id}` };
  }

  //   getUsersByNameAndId(name: string, id: string): object {
  //     return { message: 'You id is ' + name + ' and your id is ' + id };
  //   }
}
