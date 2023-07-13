
const calcular=()=>{
let Total=0;
let salchicha=document.querySelector("#salchicha");
let Jamon=document.querySelector("#jamon");
let chuleta=document.querySelector("#chuleta");
let huevo=document.querySelector("#huevo");
let veronica=document.querySelector("#veronica");
let pachequeña=document.querySelector("#pachequeña");
let texana=document.querySelector("#texana");
let toluqueña=document.querySelector("#toluqueña");
let cubana=document.querySelector("#cubana");
let Refresco=document.querySelector("#Refresco");
let ServicioADomicilio=document.querySelector("#ServicioADomicilio");


if (salchicha.checked){

    Total+=35;
}

if (Jamon.checked){

    Total+=35;
}

if (chuleta.checked){

    Total+=35;
}

if (huevo.checked){

    Total+=35;
}

if (veronica.checked){

    Total+=45;
}

if (pachequeña.checked){

    Total+=45;
}

if (texana.checked){

    Total+=45;
}

if (toluqueña.checked){

    Total+=45;
}

if (cubana.checked){
    
    Total+=45;
}

if (Refresco.checked){

    Total+=20;
}

if (ServicioADomicilio.checked){

    Total+=50;
}    
document.querySelector("#total").innerHTML=`<h3>Precio Total: $${Total.toFixed(2)} MXN</h3>`
}