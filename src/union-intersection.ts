type noob={
    name:string,
    expertise:string,


}
enum level{
    junior,
    mid,
    high
}
type pro = noob &{
    salary:number,
    level:level
}
// enum 



const developer:pro ={
  name:'opu',
  expertise:'true',
  salary:2000,
  level:level.high

}