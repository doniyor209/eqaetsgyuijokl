

                                  


const ism=document.getElementById("ism");
const familya=document.getElementById("familya");
const yosh=document.getElementById("yosh");

let i=prompt("Ismingizni kiriting");
let f=prompt("Familyangizni kiriting");
let y=prompt("Yoshingizni kiriting");

let javob=+prompt("Katta yoki kichik harfda: \n1)Katta \n2)Kichik ");

if(javob==1){
    ism.textContent="Ism:"+i.toUpperCase();
    familya.textContent="Familya:"+f.toUpperCase();
    yosh.textContent="Yosh:"+y;
}else if(javob==2){
    ism.textContent="Ism:"+i.toLowerCase();
    familya.textContent="Familya:"+f.toLowerCase();
    yosh.textContent="Yosh:"+y;
}



