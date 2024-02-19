// export class DeleteUserDto {
//     @IsInt()
//     id: number;
//   }

import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsPhoneNumber,
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

  @IsNotEmpty()
  @IsString()
  @IsIn(['male', 'female'], {
    message: 'Gender must be either "male" or "female"',
  })
  gender: string;

  @IsNotEmpty()
  @Matches(/\.jpg$/, { message: 'Profile picture must have a JPG extension' })
  profilePic: string;

  //   @IsPhoneNumber(null, { message: 'Phone number must be valid' })
  //   phoneNumber: number;

  @Matches(/^[0-9]+$/, { message: 'Phone number must contain only numbers' })
  phoneNumber: string;
}
