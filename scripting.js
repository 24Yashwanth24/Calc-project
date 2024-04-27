const resScreen=document.querySelector(".screen");
const btnClear=document.getElementById("clear");
const btnModulo=document.getElementById("modulo");
const btnDelete=document.getElementById("delete");
const btnDivide=document.getElementById("divide");
const btn7=document.getElementById("@7");
const btn8=document.getElementById("@8");
const btn9=document.getElementById("@9");
const btnMultiply=document.getElementById("mult");
const btn4=document.getElementById("@4");
const btn5=document.getElementById("@5");
const btn6=document.getElementById("@6");
const btnSubtract=document.getElementById("subt");
const btn1=document.getElementById("@1");
const btn2=document.getElementById("@2");
const btn3=document.getElementById("@3");
const btnAdd=document.getElementById("add");
const btn00=document.getElementById("@00");
const btn0=document.getElementById("@0");
const btnDecimal=document.getElementById("decimal");
const btnSolve=document.getElementById("solve");
 
resScreen.textContent="";
btnClear.addEventListener("click",()=>{
    resScreen.textContent="";
});
btnModulo.addEventListener("click",()=>{
    resScreen.textContent+="%";
});
btnDelete.addEventListener("click",()=>{
    let arr = resScreen.textContent;
    let arr2 = arr.slice(0,arr.length-1);
    resScreen.textContent=arr2;
});
btnDivide.addEventListener("click",()=>{
    resScreen.textContent+="/";
});
btn7.addEventListener("click",()=>{
    resScreen.textContent+="7";
});
btn8.addEventListener("click",()=>{
    resScreen.textContent+="8";
});
btn9.addEventListener("click",()=>{
    resScreen.textContent+="9";
});
btnMultiply.addEventListener("click",()=>{
    resScreen.textContent+="*";
});
btn4.addEventListener("click",()=>{
    resScreen.textContent+="4";
});
btn5.addEventListener("click",()=>{
    resScreen.textContent+="5";
});
btn6.addEventListener("click",()=>{
    resScreen.textContent+="6";
});
btnSubtract.addEventListener("click",()=>{
    resScreen.textContent+="-";
});
btn1.addEventListener("click",()=>{
    resScreen.textContent+="1";
});
btn2.addEventListener("click",()=>{
    resScreen.textContent+="2";
});
btn3.addEventListener("click",()=>{  
    resScreen.textContent+="3";
});
btnAdd.addEventListener("click",()=>{
    resScreen.textContent+="+";
});
btn00.addEventListener("click",()=>{   
    resScreen.textContent+="00";
});
btn0.addEventListener("click",()=>{
    resScreen.textContent+="0";
});
btnDecimal.addEventListener("click",()=>{
    resScreen.textContent+=".";
});
btnSolve.addEventListener("click",()=>{
    resScreen.textContent=eval(resScreen.textContent);
});
