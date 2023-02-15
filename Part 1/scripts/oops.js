let methods= {
    about: function(){
        console.log("username: "+this.name+" and age is: "+this.age);
    },
    city1: function(){
        console.log("user city: "+this.city);
    }

};

function userD(name,age,city){
    let user= Object.create(methods);
    user.name=name;
    user.age=age;
    user.city=city;
    user.about();
    user.city1();
    return user;
}
console.log(userD("aj",25,"mgl"));
console.log(userD("ajeet",25,"mgl"));

