 
//  map type er kaj holo type method chage kora
 
 type area ={
    height:number,
    width:number ,
    circle:string
 }
//  type A = area['height']

//  map type using indexing 
type areas ={
    [index in keyof area]:string
}
// ans type area ={height:number,width:number}

// example 2 using lookup 
type area2 ={
    [key in keyof area]:area[key]
}

// generics using lookup
type area3<T> ={
    [key in keyof T]:T[key]
}
const areag:area3<area> = {
    height:30,
    width:40,
    circle:'red'
}