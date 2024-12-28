import { ProductMemoryService } from './services/product-memory.services';

const productService = new ProductMemoryService();

productService.create({
  title: 'Product 1',
  price: 100,
  description: 'bla bla bla',
  categoryId: 12,
  images: [],
});

const products = productService.getAll();
const productId = products[0].id;

productService.update(productId, {
  title: 'change title',
});

const rta = productService.findOne(productId);
console.log(rta);
