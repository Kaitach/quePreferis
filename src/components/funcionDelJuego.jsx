import { myArray } from '../data/data';
import { AudioPlayerProvider } from "react-use-audio-player"





export default function Pregunta() {  

var rand = Math.floor(Math.random()*myArray.length);
var rand2 = Math.floor(Math.random()*myArray.length);
var rValue = myArray[rand];
var rValue2 = myArray[rand2];

if (rand == rand2) {
    sonido1.play()   
    showAlertSuccess();
    respuesta1.innerHTML =  "";
    respuesta2.innerHTML = "";
   
    

}
else {    
respuesta1.innerHTML =  `Opcion 1: ` + rValue + ` `;
respuesta2.innerHTML = `Opcion 2: ` + rValue2 + ` `;
}



}