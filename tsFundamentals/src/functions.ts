(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  }

  const producto1 = createProductToJson('P1', new Date(), 12, 'L');
  console.log(producto1);
  console.log(producto1.title);
  console.log(producto1.createdAt);
  console.log(producto1.stock);
  console.log(producto1.size);

  const createProductToJson2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes // or undefined
    // size: Sizes | undefined
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  };

  const producto2 = createProductToJson2('P2', new Date(), 12);
  console.log(producto2);
  console.log(producto2.title);
  console.log(producto2.createdAt);
  console.log(producto2.stock);
  console.log(producto2.size);
})();
