// ! This exclamation mark is used for initializing later the variable
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsUrl,
  Length,
  validate,
  validateOrReject,
} from 'class-validator';

import { AccessType, Category } from '../models/category.model';

export interface InterfaceCreateCategoryDto extends Omit<Category, 'id'> {}
export class CreateCategoryDto implements InterfaceCreateCategoryDto {
  @IsNotEmpty()
  @Length(4, 140)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'articule';
    dto.image = 'https://api.escuelajs.co/api/v1/products';
    await validateOrReject(dto);
  } catch (error) {
    console.log(error);
  }
})();
