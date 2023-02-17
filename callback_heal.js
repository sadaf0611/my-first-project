// callback hell example
function first(cb1,cb2,cb3)
{
    setTimeout(()=>{
       console.log('first') ;
       cb1(cb2,cb3);
    },1000)
}
function second(cb1,cb2)
{
    setTimeout(()=>{
       console.log('second') 
      cb1(cb2);
    },1000)
}
function third(cb)
{
    setTimeout(()=>{
       console.log('third')
       cb();
    },1000)
}
function forth()
{
    setTimeout(()=>{
       console.log('forth') 
    },1000)
}

first(second,third,forth)