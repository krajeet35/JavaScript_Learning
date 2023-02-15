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
function createUser(name,age){
    this.name= name;
    this.age=age;
};
createUser.prototype.about=function(){
    console.log(`username ${this.name} and age is ${this.age}`);
}
let user1= new createUser("skh",25);
user1.about();
let user2= new createUser("skhfkjd",28);
user2.about();
console.log(user1,user2);