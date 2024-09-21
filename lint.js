const input=require('readline-sync')

let n=input.questionInt('enter the length of arr');
let arr=[];
for (let i = 0; i < n; i++) {
    let object={};
    object.name=input.question("enter the name :");
    object.age=input.questionInt("enter the age -");
}
arr.push(object);