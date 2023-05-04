interface GenericInterface<T>{
    value:number,
    name:T
}
const crush1:GenericInterface<string> ={
    value:30,
    name:'opu'
}
const crush2:GenericInterface<boolean> ={
    value:30,
    name:true
}

// function and object in generics 
interface GenericSum<T,Z>{
    value1:T,
    value2:Z,
    sumofvalue(a:T,b:Z):void
}


const sumofnumber:GenericSum<number,number> ={
  value1:10,
  value2:20,
  sumofvalue(a:number,b:number){
  this.value1 =a,
  this.value2 =b
    
    return(a+b)
  }
}
console.log(sumofnumber.sumofvalue(20,20))