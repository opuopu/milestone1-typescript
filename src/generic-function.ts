
// arrow function

const mergearray =<T,Y>(a:T,b:Y):[T,Y]=>{
      return [a,b]
}
const invoked = mergearray<number,number>(10,10)
// console.log(invoked)

// object jehetu eikhane amra parameter ekta arrayt set korci ekhn just bole dite hobe array ta ki type er hobe

const mergeobject =<X,Y>(a:X,b:Y):object=>{
 return{
    obj1:a,
    obj2:b
 }
}
const invoked2 = mergeobject<Array<number>,Array<number>>([20, 40], [3, 29]);
console.log(invoked2)
