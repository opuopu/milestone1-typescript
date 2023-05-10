// // pick pick diye kono interface ba type theke type niye aste pari 

// // pick 
// interface person{
//     name:string
//     email:string
//     contact:number
// }
// // all pick
// type person1 =Pick<person,"contact"|"email">


// // email type
// type email = Pick<person,'contact'>


// // omit mane holo oi type er property vad diye deoa 

// type  name = Omit<person,'name'>

// // pertial and require 
// // to make all the properties be optional type 
// type optional = Partial<person>
// // to make all the properties requried 
// type requried = Required<person>

// // record type

// // type myobj={
// //     a:string 
// //     b:string 
// //     c:string
// // }
// // ------------------using index signature  most improtant---------------
// type myobj ={
//     [key:string]:string
// }
// const object:myobj={
//     a:'1',
//     b:'2',
//     c:'3'
// }
// // index signature example 2 
// // type myobj2={
// //     [key:'a'|'b'|'c']:string
// // }


// //-------------------- record type ---------
// type myobj2 =Record<string,string>
// const myobj2s:myobj2 ={
//    a:'d',
//    b:'c',
//    c:'d'
// }
// // example 2 
// type persons = Record<'A'|'B'|'C',string>
// const personoBJ:persons={
// A:'H',
// B:'D',
// C:'D',

// }