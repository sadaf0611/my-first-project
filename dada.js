//-------------------------------------------------------------

// dada() makes a promise
async function dada(){
try{

const prms= await new Promise((resolve,reject)=>{
    setTimeout(()=>{
        var sal=100;
        if(sal>1000){
            resolve('We will go out for trip')
        }
        else if(sal===100){
            reject(' We may plan for one day trip')}
        else
        {
            reject('We can not go to trip')
        }
    },1000)
})

console.log(prms);
}
catch(msg){
  console.log(msg);
}
}
dada();
