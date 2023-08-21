// function mul(a,b){
//     return a*b;
// }
// console.log(mul(2,3));

//
const person = {
    firstName:"sokhim",
    lastName:"Lach",
    age:30,
    hobbies:["football","read","playgame","write"],
    height:1.80,
    weight:50,
    fullName: function() {
        return this.firstName + " "+ this.lastName;
    }



}

console.log(person.firstName,person.lastName, person.age,person.hobbies[0])
console.log(person.fullName());