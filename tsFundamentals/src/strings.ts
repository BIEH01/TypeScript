(() => {
  let productTitle = 'Amazing product';
  // productTitle = null; > Error
  // productTitle = () => {}; > Error
  // productTitle = 987; > Error

  productTitle = 'New amazing product';
  console.log('productTitle', productTitle);

  const myDescription = "I'm Bryan"; // 'I'm Bryan' > Error
  console.log('myDescription', myDescription);

  const summary = `
    title: ${productTitle}
    description: ${myDescription}
  `;
  console.log(summary);

  // Type in lowercase String is not right
  const myString: String = '';
})();
