(() => {
  let isEnable = true;
  isEnable = false;

  // isEnable = 'abc'; > Error
  // isEnable = 123; > Error
  // isEnable = null; > Error
  // isEnable = undefined; > Error

  let isNew: boolean = false;
  console.log('isNew', isNew);
  isNew = true;
  console.log('isNew', isNew);

  const random = Math.random();
  console.log('random', random);
  isNew = random >= 0.5 ? true : false;
  console.log('isNew', isNew);

  // Type in lowercase Boolean is not right
  const myBoolean: boolean = true;
})();
