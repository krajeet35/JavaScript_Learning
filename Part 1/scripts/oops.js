// // let methods= {
// //     about: function(){
// //         console.log("username: "+this.name+" and age is: "+this.age);
// //     },
// //     city1: function(){
// //         console.log("user city: "+this.city);
// //     }

// // };

// function userD(name,age,city){
//     // let user= Object.create(methods);
//     let user= Object.create(userD.prototype);
//     user.name=name;
//     user.age=age;
//     user.city=city;
//     user.about();
//     // user.city1();
//     return user;
// }
// // console.log(userD("aj",25,"mgl"));
// // console.log(userD("ajeet",25,"mgl"));

// userD.prototype.about= function(){
//     console.log(`username is ${this.name} and age is ${this.age}`);
// };
// console.log(userD("aheet",20,"mfl"));

//  new keyword
// function createUser(name,age){
//     this.name= name;
//     this.age=age;
// };
// createUser.prototype.about=function(){
//     console.log(`username ${this.name} and age is ${this.age}`);
// }
// let user1= new createUser("skh",25);
// user1.about();
// let user2= new createUser("skhfkjd",28);
// user2.about();
// console.log(user1,user2);
// for(let i in user1){
//     // console.log(i);
//     console.log(user1.hasOwnProperty(i));
// }

// let arr= [5,53,8,2,58,2];
// let arr1= new Array(2,5,30);
// console.log(arr1);
// console.log(Object.getPrototypeOf(arr));

// class

// class createUser{

//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     about(){
//         console.log(this.name,this.age);
//     }
// }

// let user1= new createUser("sjgf",54);
// console.log(user1);

// class Animal{
//     constructor(name,age){
//         this.name=name;
//         this.age=age
//     }
// };

// class Dog extends Animal{
//     constructor(name,age,speed){
//         super(name,age);
//         this.speed=speed;
//     }
// };

// console.log(new Dog("mksd",2,10));

//  getter and setter

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     get about(){
//         console.log(this.name,this.age);
//     }
//     set nameDetails(name1){
//         this.name=name1;
//     }
// };

// let person1= new Person("akhd",23);
// console.log(person1);
// person1.about;
// person1.nameDetails="Ajeet";
// console.log(person1.name);
// person1.about;


// Static methods and properties

class Person{
    static x=20;
    static info(){
        console.log("inside static class "+ this.x);
    }
}

Person.info();
console.log(Person.x);












