// export class DeleteUserDto {
//     @IsInt()
//     id: number;
//   }

import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class AddResidentDTO {
  @MinLength(4)
  name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Invalid email format' })
  @Matches(/@aiub\.edu$/, { message: 'Email must be from aiub.edu domain' })
  email: string;

  @IsNotEmpty()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @Matches(/(?=.*[A-Z])/, {
    message: 'Password must contain at least one uppercase letter',
  })
  password: string;

  //   @IsString()
  //   gender: string;

  //   @IsString()
  //   profilePicture: string;

  //   @IsString()
  //   phoneNumber: string;
}
