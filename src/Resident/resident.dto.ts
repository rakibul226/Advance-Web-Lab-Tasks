import { IsIn, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class AddResidentDTO {
  @IsNotEmpty()
  fullName: string;

  @IsNotEmpty()
  @IsInt()
  age: number;

  @IsNotEmpty()
  @IsIn(['active', 'inactive'])
  status: string;
}

export class UpdateResidentStatusDTO {
  status: 'active' | 'inactive';
}

// @MinLength(4)
// name: string;
// @IsNotEmpty()
// @IsEmail({}, { message: 'Invalid email format' })
// @Matches(/@aiub\.edu$/, { message: 'Email must be from aiub.edu domain' })
// email: string;
// @IsNotEmpty()
// @MinLength(6, { message: 'Password must be at least 6 characters long' })
// @Matches(/(?=.*[A-Z])/, {
//   message: 'Password must contain at least one uppercase letter',
// })
// password: string;
// @IsNotEmpty()
// @IsString()
// @IsIn(['male', 'female'], {
//   message: 'Gender must be either "male" or "female"',
// })
// gender: string;
// @IsNotEmpty()
// @Matches(/\.jpg$/, { message: 'Profile picture must have a JPG extension' })
// profilePic: string;
// @Matches(/^[0-9]+$/, { message: 'Phone number must contain only numbers' })
// phoneNumber: string;

//   @IsPhoneNumber(null, { message: 'Phone number must be valid' })
//   phoneNumber: number;
