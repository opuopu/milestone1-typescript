
// a type is depended on another type

// example 1 extends mane tar value ta ki type er.
type a1 =number 
type a2 =a1 extends string ? string : null


// example 2 nested conditon 
type x=number 
type y =object 
type z = string

type d = x extends null? null :y extends null? null:z extends string? string:never



// example with generic types  

type Genericss<T> = T extends 'A'?'A':T extends 'B' ? 'B':T extends 'C' ? 'C':never

type G = Genericss<'B'>


// another example
type sheikh ={
    wife1:string,
    wife2:string
}

type cheeckSheikh<T,U > = U extends keyof T? T[U] :false

type cheeknow = cheeckSheikh<sheikh,'wife1'>

// another example of matha kharaf 

type bandupi = 'monica'|'reche' |'doha'

type removebandupi<T,U> = T extends U? never:T 
type cheecknow = removebandupi<bandupi,'reche'>