import logger, {appName, dummyFunction,Person,User} from './tools.js';
logger("Welcome! The application name is " + appName + ". There is a function that returns " + dummyFunction() );

logger("Welcome to Chapter 10! We are now having fun with modularity");

let person1 = new Person("Therese", "Mbama", "Feale", 1.7);
let person2 = new Person("Mary", "Joseph", "Female", undefined);
let user1 = new User("myusername", "mypassword", "Therese", "Onobhayedo", "Female", undefined);
logger(`Person 1 is ${person1.firstName} whose height is ${person1.height} . Person 2 is ${person2.firstName} whose height is  ${person2.height}`);