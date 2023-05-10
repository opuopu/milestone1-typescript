
// interface 1
interface Iuser{
    firstName:string,
    lastName:string
    
}
// interface 2
interface IMethods{
    fullName():string
}
// root interface
interface Model<TData,TMethod>{
    data:TData,
    method:TMethod
}
// type
type model = Model<Iuser,IMethods>

class User implements model{
    data:Iuser
    method: IMethods

    constructor(firstName:string,lastName:string){
        this.data ={
            firstName,lastName
        }
        this.method={
            fullName():string {
                return `${firstName} and ${lastName} `
            },
        }
       

    }
}
const user1 = new User('nur','opu')
console.log(user1)