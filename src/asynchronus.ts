// using promise 

const objectpromise =(): Promise<object> =>{
   return new Promise<object>((resolve, reject) => {
        // Simulating an asynchronous operation
        const data ={name:'opu'}
        setTimeout(() => {
             if(data){
                resolve(data)
             }
             else{
                reject('data not found')
             }
        }, 1000);
      });
}

const resolvedata =async():Promise<void>=>{
    try {
        const data = await objectpromise();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
}
resolvedata()


// load data using json placeholder 

const getdata = async():Promise<object> =>{
    const url = `https://jsonplaceholder.typicode.com/todos/1`
    const res = await fetch(url)
     return  await res.json()
   

}
const gettodo =async():Promise<void> =>{

    // eikhane promise resolve hocce
   const result  = await  getdata()
   console.log(result)
}
gettodo()
