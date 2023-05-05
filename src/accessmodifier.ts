class banckaccount {
    name:string
    id:number
    balance:number 

    constructor(name:string,id:number,balance:number){
        this.name = name 
        this.id = id 
        this.balance = balance
    }
}

const myaccount = new banckaccount('opu',10,1000)
console.log(myaccount)