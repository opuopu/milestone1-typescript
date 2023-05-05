// // typeof guard
// type cheek = string |number

// function cheeckKeyofGaurd(alpha1:cheek,alpha2:cheek):cheek{
//        if(typeof alpha1==='number' && typeof alpha2 ==='number'){
//         return alpha1+alpha2
//        }
//        else{
//         return  alpha1.toString() +alpha2.toString()
//        }
// }

 
// // in guard in guard er kaj holo object er property dekha as js 
// type user={
//     name:string,
//     id:number
// }
// type adminuser ={
//     name:string,
//     id:number
//    role:string
// }

// function cheeckadmin(user:user |adminuser):string{
  
//   if('role' in user){
//     return `user in admin`
//   }
//   else{
//     return `not admin`
//   }
// }

// const cheecknow = cheeckadmin({name:'opu',id:30,role:'admin'})
// console.log(cheecknow)


// // instac of guard eta diye cheek kore kono class ke keu instace korece kina. instance korle oi class er property access korte parbo



// // narrow guard 
// class animal {
//   name:string 
//   sound:string 
//   constructor(name:string,sound:string){
//       this.name = name 
//       this.sound = sound
//   }
//   makesound(){
//      console.log(`making sound`)
//   }
// }

// class dog extends animal{
//   constructor(name:string,sound:string){
//       super(name,sound)
//   }
//   makebark(){
//       console.log(`the ${this.name} is ${this.sound}`)
//   }
// }

// class cat extends animal{
//   constructor(name:string,sound:string){
//       super(name,sound)
//   }
//   makemew(){
//       console.log(`the ${this.name} is ${this.sound}`)
//   }
// }

// // narrow guard 
// function isCat(animal: animal): animal is cat {
// return animal instanceof cat;
// }

// // narrow guard
// function isdog(animal: animal): animal is dog {
// return animal instanceof dog;
// }
// function cheeckinstace(obj:animal){
//         if(isdog(obj)){
//           obj.makebark()
//         }
//         else if(isCat(obj)){
//     obj.makemew()
//         }
//         else{
//           console.log('unknown animal')
//         }
// }

// // instance of animal 
// const dogs = new dog('rocket','geu geu')
// const cats = new cat('pagla biral','mew mew')
// cheeckinstace(dogs)
//   cheeckinstace(cats)
