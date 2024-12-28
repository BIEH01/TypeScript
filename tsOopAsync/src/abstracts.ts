// Abstract avoids creating new objects directly, only by inherited classes of the abstract class

import { Animal, Dog } from './protected';

// const animal = new Animal('elite');
// animal.greeting(); > Cannot be created because of abstract class

const blue = new Dog('chis', 'Bi');
blue.greeting();
blue.bark(1);
