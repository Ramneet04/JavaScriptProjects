//Const ek object ya ek element hai not the text
const countValue=document.getElementById("Counter");
// console.log(countValue);

function increment(){
    let val=parseInt(countValue.innerText);
    val++;
    countValue.innerText=val;
};
function decrement(){
    let val=parseInt(countValue.innerText);
    val--;
    countValue.innerText=val;
};