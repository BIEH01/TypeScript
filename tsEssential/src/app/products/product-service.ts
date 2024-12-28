import {
  CreateProductDto,
  UpdateProductDto,
  FindProductDto,
} from './product.dto';
import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: 'ajklfjalkjglajdglaj',
    createdAt: new Date(),
    updatedAt: new Date(),
    category: {
      id: 'agafklajflka',
      name: 'Sales',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  };
  products.push(newProduct);
  return newProduct;
};

export const updateProduct = (
  id: Product['id'], // Type by index
  changes: UpdateProductDto
): Product => {
  const index = products.findIndex((item) => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes,
  };
  return products[index];
};

export const findProducts = (dto: FindProductDto): Product[] => {
  const product = products.filter((item) => item === dto);
  // dto.tags?.pop(); // It allows internal modifications but if not readonly at dto
  // dto.tags = []; > Cannot be modified because of Readonly
  // dto.color = 'blue'; > Cannot be modified because of Readonly
  return product;
};
