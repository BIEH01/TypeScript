import { Product } from './product.model';

// Omit avoid some selected params from an interface
export interface CreateProductDto
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

// Pick takes some selected params from an interface
type example = Pick<Product, 'color' | 'description'>;

// Partial allows to access with some params to an interface
export interface UpdateProductDto extends Partial<CreateProductDto> {}

// Require needs to have all params to access to an interface
type example2 = Required<Product>;

export interface FindProductDto
  extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>; // It makes arrays inmutable
}

// Readonly prohibit to modify values
type example3 = Readonly<Product>;
