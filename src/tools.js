var logger = function(output){
    console.log(output)
    }
    export var appName = "ES6 Review";
    export var dummyFunction = function(){
    return "I am a dummy function";
    }
    export default logger; 


export class Person{
  constructor(firstName, lastName, gender, height){
    this.firstName = firstName;
    this,lastName = lastName;
    this.gender = gender;
    this.height = height;
  }
};

export class User extends Person {
  constructor(username, password, firstName, lastName, gender, height){
    super(firstName, lastName, gender, height);
    this.username = username;
    this.password = password;
}
};