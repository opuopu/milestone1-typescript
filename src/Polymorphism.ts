class subject {
    subjectName():void{
        console.log(`this is super  subject`)
    }
}
class english extends subject{
    subjectName():void{
        console.log(`this is english subject`)
    }
}
class bangla extends subject{
    subjectName():void{
        console.log(`this is bangla subject`)
    }
}
// crating a function to get subjectName 

function getsubjectName(subject:subject){
    console.log(subject.subjectName()) 
}



// creating instance of subject class
const english1 = new english()
const bangla1 = new bangla()

getsubjectName(english1)

getsubjectName(bangla1)


// example 2 --------------------------
class area {
    getarea():number{
        return 0
    }
}

class cricle extends area{
    radius:number
    constructor(radius:number){
        super()
        this.radius = radius
    }
    getarea():number{
        return (Math.PI*this.radius*this.radius)
    }

}

class rectangle extends area{
    height:number
    width:number
    constructor(height:number,width:number){
        super()
        this.height = height
        this.width = width
    }
    getarea():number{
        return this.height*this.width
    }
}

// creating instance 
const circle1 = new cricle(10)
const rectangle1 = new rectangle(10,10)
console.log(circle1.getarea())
console.log(rectangle1.getarea())