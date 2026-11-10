//var generateName = require('sillyname');

import generateName from "sillyname";
import { randomSuperhero } from "superheroes";

var sillyname = generateName();

console.log(`My name is ${sillyname}`);

var name = randomSuperhero();

console.log(`I am ${name}!`);
