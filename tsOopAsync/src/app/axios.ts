// Axios allows typing the answer of an api by adding 'axios.get<Product[]>' to infer a type internally and externally

import axios from 'axios';

import { Product } from './models/product.model';

(async () => {
  async function getProducts() {
    const { data } = await axios.get<Product[]>(
      'https://api.escuelajs.co/api/v1/products'
    );
    data.length;
    return data;
  }

  // async function getProducts() {
  //   const rta = await axios.get(
  //     'https://api.escuelajs.co/api/v1/products'
  //   );
  //   const data = rta.data as Product[]; > The way when no type option library
  //   data.length;
  //   return data;
  // }

  const products = await getProducts();
  console.log(products.map((item) => `${item.id} - ${item.title}`));
})();
