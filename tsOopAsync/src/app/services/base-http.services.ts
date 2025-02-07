import { UpdateProductDto } from '../dtos/product.dto';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
import axios from 'axios';

export class BaseHttpService<TypeClass> {
  // data: TypeClass[] = [];
  constructor(public url = 'https://api.escuelajs.co/api/v1/products') {}

  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}

(async () => {
  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(url1);
  const rta = await productService.getAll();
  console.log('Products', rta.length);
  productService.update<Product['id'], UpdateProductDto>(1, {
    title: 'asa',
  });

  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(url2);
  const rta2 = await categoryService.getAll();
  console.log('Categories', rta2.length);
})();
