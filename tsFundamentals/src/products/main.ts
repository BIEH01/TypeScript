import { createProduct, calcStock, products } from './productService';

createProduct({
  name: 'Pro1',
  createdAt: new Date(2024, 10, 29),
  stock: 12,
});

createProduct({
  name: 'Pro2',
  createdAt: new Date(2024, 10, 29),
  stock: 24,
  size: 'L',
});

const total = calcStock();
console.log(products);
console.log(total);
