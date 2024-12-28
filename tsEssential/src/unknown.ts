let anyVar: any;
anyVar = true;
anyVar = '';
anyVar = 1;
anyVar = [];
anyVar = {};
anyVar = undefined;
anyVar = null;

let isNew: boolean = anyVar;

anyVar.anyFunction();

let unknownVar: unknown;
unknownVar = true;
unknownVar = '';
unknownVar = 1;
unknownVar = [];
unknownVar = {};
unknownVar = undefined;
unknownVar = null;

// unknownVar.anyFunction(); > Error
if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase();
}
// unknownVar.toUpperCase(); > Error

/*
const parse = (str: string): any => { > Return a value does not exist yet
  return JSON.parse(str);
};
*/

if (typeof unknownVar === 'boolean') {
  let isNewer: boolean = unknownVar;
}

// let isNewer: boolean = unknownVar; > Error

const parse = (str: string): unknown => {
  return JSON.parse(str);
};
