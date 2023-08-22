// const video = {
//     title:"learn",
//     play(){
//         console.log(this);
//     }
// };

// function video(){
//     console.log(this);
// }
// video();

function person(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}
const change = new person("Sokhim",19,"Male");
    console.log(change.name)
    console.log(change.age)
