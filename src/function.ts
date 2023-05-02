
// number type arrow function return a number
const sumofnumber =(a:number,b:number):number=>{
    return a+b
}

console.log(sumofnumber(5,5))

// use a function in object personType is type of persons object 
type personsType ={
    name:string,
    age:number,
    salary:number,
    totalSalary(s:number):number
}
const persons :personsType={
    name:"opu",
    age:15,
    salary:2000,
    totalSalary(s){
        return this.salary +s
    }
}

// spread operator 
const friends:string[] =['opu','akhi','niloy']
const newfriends = ['doctor','silgala']
friends.push(...newfriends)
console.log(friends)