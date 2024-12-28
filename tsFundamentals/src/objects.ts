(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  };

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  };

  addProduct({
    title: 'Pro1',
    createdAt: new Date(2024, 10, 29),
    stock: 12,
  });

  addProduct({
    title: 'Pro2',
    createdAt: new Date(2024, 10, 29),
    stock: 24,
    size: 'L',
  });

  products.push({
    title: 'Pro3',
    createdAt: new Date(2024, 10, 29),
    stock: 32,
    size: 'M',
  });
  console.log(products);
})();
