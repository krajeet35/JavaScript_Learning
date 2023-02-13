//  Set

// let arr= new Set([5,20,5,-1,null,null]);
// arr.add(10);
// arr.clear();
// arr.delete(5);
// arr.forEach((i)=>console.log(i));
// console.log(arr.has(null));
// console.log(arr.keys());
// console.log(arr.size);
// console.log(arr.values());
// console.log(arr);

// for(let i of arr){
//     console.log(i);
// };
// let arr=[5,2,3,6,42,6,8,2,2];
// let set1= new Set(arr);
// // console.log(arr,set1);
// console.log(set1.size);

// Map method

let obj={
    name:"ajeet",
    age:25,
    gender:"Male"
};

let map1= new Map();
map1.set(1,10);
map1.set("name","Ajeet");
map1.set({0:10,1:20,city:"mfp"});
// console.log(map1.keys());

for(let [key,val] of map1){
    console.log(key,val);
}
let map2= new Map([['name',"Ajeet"],[1,10]]);
console.log(map2);