type GenericArray<T> = Array<T>
const rollnumber:GenericArray<number> =[1,2,3,4]
const rollnumber2:GenericArray<string> =['1','2','3']

// tuple like generics
type GenericArrayTupe<x,y> =[x,y]

// allias type 
type objects={
    name:string,
    roll:number
}

// interface 
interface object1{
    name:string,
    roll:number
}

const userinfos:GenericArrayTupe<objects,string>=[
    {
        name:"opu",
        roll:39
    },
    'opu vai'
]
const userinfos2:GenericArrayTupe<object1,string>=[
    {
        name:"opu",
        roll:39
    },
    'opu vai'
]
