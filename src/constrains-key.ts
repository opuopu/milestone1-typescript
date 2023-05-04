
interface person{
    name:string,
    data:number[],
    age:number
}

const person:person ={
 name:"opu",
 data:[1,2,3,4],
 age:20
}
const mergeperson = <T extends person,K extends keyof T>(a:T,b:K):T[K] =>{
    return a[b]
}

const values1 = mergeperson({...person,date:20},'date')
console.log(values1)