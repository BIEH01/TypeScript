//type Sizes = 'S' | 'M' | 'L' | 'XL';
// type Product = {
//   id: string | number;
//   title: string;
//   createdAt: Date;
//   stock: number;
//   size?: Sizes;
// }; //> No scalable

interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: 'S' | 'M' | 'L' | 'XL'; // Or Sizes;
} //> Scalable

const products: Product[] = [];

products.push({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  stock: 90,
});

const addProduct = (data: Product) => {
  products.push(data);
};
