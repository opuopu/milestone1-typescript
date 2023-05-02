// null 
const searchname =(value:string | null)=>{
    if(value === null){
        console.log('null value')
    }
    else{
        console.log('hello mama')
    }
}
searchname(null)
searchname('hello mama')