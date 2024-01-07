const slider=document.querySelector("[Pass-slider]");
const lengthNumber=document.querySelector("[Pass-length-number]");
const displayPass=document.querySelector("[custon-Art]");
const copy=document.querySelector("[data-copy]");
const copyMsg=document.querySelector("[data-copy-Art]");

const upperCase=document.querySelector("#check1");
const lowerCase=document.querySelector("#check2");
const number=document.querySelector("#check3");
const symbol=document.querySelector("#check4");

const dataIndicator=document.querySelector("[pass-indicator]");
const generateBtn=document.querySelector(".Generate-button");
const allCheckBox=document.querySelectorAll("input[type=checkbox]");

const strengthText=document.querySelector("[strengthTexting]");

// string se easy hai array me '', krna padhta 
const string="!+-}{][)(.,><?/*%$#*@~|:;";
let lenString=string.length;


let password="";
let passLength=10;
let checkCount=0;
handleSlider();
setIndicator("#ccc");
//Bs UI ki Password length ko Update krta hai
function handleSlider(){
    // slider.value=passLength;
    lengthNumber.textContent=passLength;
    const max=slider.max;
    const min=slider.min;
    slider.style.backgroundSize=((passLength-min)*100/(max-min))+"% 100%";
}

function getRandom(min,max){
    //math . random hamesha 0 to 1 de hai if min is 2 so 0+2 2 hi dekha chota sabse okkkk...
    const number=Math.floor(Math.random()*(max-min))+min;
    return number;
}
function generateInteger(){
    return getRandom(0,10);
}
function generateLowerCase(){
    const char=String.fromCharCode(getRandom(97,123));
    return char;
}
function generateUpperCase(){
    const char=String.fromCharCode(getRandom(65,91));
    return char;
}
function generateSymbols(){
    const symbol=string[getRandom(0,lenString)];
    return symbol;
}

function setIndicator(color){
    dataIndicator.style.backgroundColor=color;
    dataIndicator.style.boxShadow=`0px 0px 6px 1px ${color}`;
}
function setStrengthColor(color){
    strengthText.style.color=color;
}
function setPassDisplayColor(color){
    displayPass.style.color=color;
}
function strengthCalculate(){
    let lower=false;
    let upper=false;
    let num=false;
    let sym=false;

    if(upperCase.checked){
        upper=true;
    }
    if(lowerCase.checked){
        lower=true;
    }
    if(number.checked){
        num=true;
    }
    if(symbol.checked){
        sym=true;
    }
    if(upper && lower && (num || sym) && passLength>=8){
        setIndicator("rgb(52, 164, 52)");
        setStrengthColor("rgb(52, 164, 52)");
        setPassDisplayColor("rgb(52, 164, 52)");
    }
    else if((upper || lower)&&(num ||sym) && passLength>=6){
        setIndicator("yellow");
        setStrengthColor("yellow");
        setPassDisplayColor("yellow");
    }
    else{
        setIndicator("rgb(234, 34, 34)");
        setStrengthColor("rgb(234, 34, 34)");
        setPassDisplayColor("rgb(234, 34, 34)");
    }
}

async function copyContent(){
    //input filed thi uski val hi hoti hai property or atribute Easy 
    try{
        //Promise Complete
        await navigator.clipboard.writeText(displayPass.value);
        copyMsg.innerText="Copied";
    }
    catch{
        //promise Failed
        copyMsg.innerText="Failed";
    }
    copyMsg.classList.add("active");
    
    setTimeout(()=>{
        copyMsg.classList.remove("active");
    },2000);
}

slider.addEventListener("input",(event)=>{
    passLength=event.target.value;
    handleSlider();
})
copy.addEventListener("click",()=>{
    if(displayPass.value)
    copyContent();
})
//Single Single check box me bhi laga sakte hai  but logic same hai toh Loop use kro
function handleCheckBox(){
    checkCount=0;
    for(let i=0;i<allCheckBox.length;i++){
        if(allCheckBox[i].checked){
            checkCount++;
        }
    }
    //Special Condition
    if(passLength<checkCount){
        passLength=checkCount;
        //As slider gets its original position
        handleSlider();
    }
}
function shuffPass(arr){
    //Fisher Yates Method

}
for(let i=0;i<allCheckBox.length;i++){
    allCheckBox[i].addEventListener("change",handleCheckBox);
}
generateBtn.addEventListener("click",()=>{
    //None of checkBox are checked
    if(checkCount==0){
        return;
    }
    if(passLength<checkCount){
        passLength=checkCount;
        handleSlider();
    }
    //Remove Old password
    password="";

    //Put all the stuffs mentioned by checkboxes
    //No need
    // if(upperCase.checked){
    //     password+=generateUpperCase();
    // }
    // if(lowerCase.checked){
    //     password+=generateLowerCase();
    // }
    // if(number.checked){
    //     password+=generateInteger();
    // }
    // if(symbol.checked){
    //     password+=generateSymbols();
    // }
    let funcArr=[];
    if(upperCase.checked){
        funcArr.push(generateUpperCase);
    }
    if(lowerCase.checked){
        funcArr.push(generateLowerCase);
    }
    if(number.checked){
        funcArr.push(generateInteger);
    }
    if(symbol.checked){
        funcArr.push(generateSymbols);
    }
    //Compulsory Taki kam se kam ek whoh check letter aa jaye ya symbol ya number 
    for(let i=0;i<funcArr.length;i++){
        password+=funcArr[i]();
    }
    for(let i=0;i<passLength-funcArr.length;i++){
        const random=getRandom(0,funcArr.length);
        password+=funcArr[random]();
    }

    //Shuffle Password
    displayPass.value=password;
    password=shuffPass(Array.from(password));
    strengthCalculate();
    setStrengthColor();
    setPassDisplayColor();
})