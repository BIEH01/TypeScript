(() => {
  const login = (data: { email: string; password: number }) => {
    console.log(data.email, data.password);
  };

  // login('bieh@github.com', 01010101);
  login({
    email: 'bieh@github.com',
    password: 12345678,
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
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

  console.log(products);
})();
