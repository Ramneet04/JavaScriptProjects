setTimeout(() => {
    console.log("first");
}, 1000);
setTimeout(() => {
    console.log("second");
}, 2000);
try{
    // settimeout se ab future me chala gya 
setTimeout(()=>{

    try{
        console.log(h);
    }
    catch(error){
        // console.log("its a error");
        //flow nhi rukega
        throw new Error("its a error")
    }
},3000)
}
catch(error){
    console.log("its a error");
}
setTimeout(() => {
    console.log("third");
}, 3000);
setTimeout(() => {
    console.log("fourth");
}, 4000);
setTimeout(() => {
    console.log("fivth");
}, 5000);