var cambio="true";
//VARIABLES_IMAGEN1
var cambioColor1a=window.document.getElementById("color1a");
var cambioColor2a=window.document.getElementById("color2a");
var cambioColor3a=window.document.getElementById("color3a");
var imagenCambio1=window.document.getElementById("imagenColor1");
// IMAGEN1
cambioColor1a.addEventListener('click',function color1(){
    imagenCambio1.style.filter='saturate(0)';
    imagenCambio1.style.filter= 'hue-rotate(0deg)';
});
cambioColor2a.addEventListener('click',function color2(){
    imagenCambio1.style.filter='saturate(0)';
    imagenCambio1.style.filter= 'hue-rotate(120deg)';
});
cambioColor3a.addEventListener('click',function color3(){
    imagenCambio1.style.filter= 'hue-rotate(0deg)';
    imagenCambio1.style.filter='saturate(50)';
});

imagenCambio1.addEventListener('click',(imagenColor1)=>{
 if(cambio){
    imagenCambio1.style.width='300px';
    imagenCambio1.style.top= '-40px';
    imagenCambio1.style.left= '-59px';
    cambio=false;
}else{
    imagenCambio1.style.top= '0px';
    imagenCambio1.style.width='130px';
    imagenCambio1.style.left= '99px';
    cambio=true;
}
});
//VARIABLES_IMAGEN2
var imagenCambio2=window.document.getElementById("imagenColor2");
//IMAGEN2
imagenCambio2.addEventListener('click',(imagenColor2)=>{
    if(cambio){
       imagenCambio2.style.width='300px';
       imagenCambio2.style.top= '50px';
       imagenCambio2.style.left= '-59px';
       cambio=false;
   }else{
       imagenCambio2.style.top= '12px';
       imagenCambio2.style.width='145px';
       imagenCambio2.style.left= '65px';
       cambio=true;
   }
});
//VARIABLES_IMAGEN3
var cambioColor1c=window.document.getElementById("color1c");
var cambioColor2c=window.document.getElementById("color2c");
var cambioColor3c=window.document.getElementById("color3c");
var imagenCambio3=window.document.getElementById("imagenColor3");
//IMAGEN3
cambioColor1c.addEventListener('click',function color1(){
    imagenCambio3.style.filter= 'hue-rotate(0deg)';
});
cambioColor2c.addEventListener('click',function color2(){
    imagenCambio3.style.filter= 'hue-rotate(120deg)';
});
cambioColor3c.addEventListener('click',function color3(){
    imagenCambio3.style.filter= 'hue-rotate(40deg)';
});
imagenCambio3.addEventListener('click',(imagenColor3)=>{
    if(cambio){
       imagenCambio3.style.width='300px';
       imagenCambio3.style.top= '-30px';
       imagenCambio3.style.left= '-55px';
       cambio=false;
   }else{
       imagenCambio3.style.top= '-35px';
       imagenCambio3.style.left= '75px';
       imagenCambio3.style.width='150px';
       cambio=true;
   }
})