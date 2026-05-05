import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

// PartialType automatically makes all fields from CreateUserDto optional
export class UpdateUserDto extends PartialType(CreateUserDto) {}