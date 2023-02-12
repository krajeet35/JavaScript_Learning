// let person={
//     name:"Ajeet",
//     age:20,
//     cities:["mfp","ald","hyd"]
// };
// person.gender="male";
// console.log(person);

// for(let i in person){
//     console.log(person[i]);
// }
// Object.keys(person)

// const name="Name", name2="age", val1="Ajeet", val2=25;

// let obj={};
// obj[name]=val1;
// obj[name2]=val2;
// let obj1={
//     [name]:val1,
//     [name2]:val2
// }
// console.log(obj,obj1);

// Spread operator
// let arr=[5,6,8,41,5], arr2=["sdfd","sfdsfd","woryeorh"];
// let newarr=[...arr, ...arr2];
// console.log(newarr);
// let obj={
//     key:"value",
//     key2:"value2"
// }
// let obj2={
//     key3:"value3",
//     key4:"value4",
//     key:"updatedVal"
// }
// let obj3={...obj,...obj2};
// console.log(obj3);

// Object destructuring

// let obj={
//     name:"Ajeet",
//     last:"roy",
//     place:"Ald"
// };

// let {name,last,place}= obj;
// console.log(name,last,place);

// let user=[
//     {name:"Aj",
//      age:26
//     },
//     {
//         name:"roy",
//         age:24
//     }
// ];

// console.log(user);

// for(let i of user){
//     console.log(i.name);
// }

//  Functions

// //  Function declaration
// function print(){
//     console.log("Hello There!");
// }
// print();

// //  function expression
// let sum= function(a,b){
//     return a+b;
// }

// // Arrow function
// let divide= (a,b)=>{
//     return a/b;
// }

// let mult = (a,b) => a*b;
// console.log(mult(4,5));

// //  function inside function

// let fun1 = ()=>{
//     console.log("inside fun1");
    
//     let fun2 = ()=>{
//         console.log("inside fun2");
//     }
//     fun2();
// }
// fun1();

// //  Rest parameter

// let fun3= (a,b,...c) =>{
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// fun3(5,4,2,3,7,6,9)

// let fun4= (...a) =>{
//     let sum=0;
//     for(let i of a){
//         sum+=i;
//     }
//     console.log(sum);
// }
// fun4(5,4,2,3,7,6,9)

// parameter destructuring

// let person={
//     name: "Ajeet",
//     last: "Roy"
// };

// let details= (obj) =>{
//     console.log(obj.name);
//     console.log(obj.last);
// }
// let details= ({last,name}) =>{
//     console.log(name);
//     console.log(last);
// }

// details(person);

// callback function

// let fun1 = (a)=>{
//     a();

// }

// let fun2 =()=>{
//     console.log("inside fun2");
// }
// fun1(fun2);

//  function returning function



// let fun1= ()=>{
//     let fun2 = ()=>{
//         return "inside fun2 "
//     }
//     return fun2;
// }

// let res=fun1();
// console.log(res());

//  forEach
// let arr=[5,4,2,13,6,7,5,8,7];
// arr.forEach((i,j)=>{
//     console.log(i,j);
// });
// let newarr=arr.map((i)=>{
//     return (i*10);
// });
// console.log(newarr);

// let newarr= arr.filter((i)=>{
//     return i%2==0;
// });
// console.log(newarr);


// let val=arr.reduce((a,b,i,j)=>{
//     console.log(a,b,i,j);
//  return a+b;
// });

// console.log(val);













































































