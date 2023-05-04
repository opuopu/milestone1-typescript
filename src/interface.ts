type user={
  name:string,
  roll:number
}


// we will user interface for object type data
interface iuser {
    name: string;
    age: number;
    greet?(): void;
  }
interface extenderuser extends iuser{
    display:boolean,
    role:string
}
  const userinfo:extenderuser ={
  name:'opu',
  age:20,
  display:true,
  role:'admin'

  }
  console.log(userinfo)

//   interface and type 

// recomend for function
type addtonumbetype =(a:number,b:number)=>number 

// interface
interface iaddtoType{
     (a:number,b:number):number
}

const sumtonumber:addtonumbetype=(a,b)=>a+b 
const subtonumberinterface:iaddtoType =(a,b)=>a+b

// array  

// using-type
type numbersarray = number[]
const numbersarrays:numbersarray =[1,2,3,4,5]

// using interface 
interface inumber{
   [index:number]:number
}
const inumbersarray:inumber = [1,2,3,4]