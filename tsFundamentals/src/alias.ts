(() => {
  // Alias
  type UserID = string | number | boolean;

  // Literals types
  // let shirtSize: 'S' | 'M' | 'L' | 'XL';
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'S';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  // shirtSize = 's'; > Error

  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    }
  }
  greeting('BI', 'L');
})();
