import {
  addProduct,
  updateProduct,
  findProducts,
  products,
} from './products/product-service';

for (let index = 0; index < 10; index++) {
  addProduct({
    title: 'p1',
    image: 'https://image.com',
    description: 'This is a little description',
    stock: 1,
    color: 'Black',
    price: 99,
    isNew: true,
    tags: ['summer', 'winter', 'fall', 'spring'],
    categoryId: 'analfnaldflajgl',
  });
}

console.log(products);

const product = products[0];
updateProduct(product.id, {
  title: 'new title',
  stock: 80,
});

findProducts({
  stock: 10,
  color: 'red',
  createdAt: new Date(),
  tags: ['as', 'sa'],
});
