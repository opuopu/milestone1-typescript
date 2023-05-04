const nameString:any ='hello mamas'
console.log((nameString as string).length)


function multiply(param:number|string):number|string|undefined{
   if(typeof param ==="number"){
    const value = param *100
    console.log(value)
    return value
   }
   else if(typeof param ==='string'){
    const value = parseFloat(param) *300
    console.log(value+ ' number')
    return value
   }
}
// type assertion eikhane amra bole dicci actually kon type er hobe
const multiplyFn = multiply(6)as string