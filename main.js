let botCopiar = document.getElementById('copiar');
let botBorrar = document.getElementById('borrar');
//-----------------------------------------------------
let checknums = document.getElementById('checkCN');
let checkespe = document.getElementById('checkCE');
//-----------------------------------------------------
let msge = document.getElementById('mensaje');
let cantidad = document.getElementById('cantidad');
let contraResu = document.getElementById('contrasena');

const carasA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const carasB = 'abcdefghijklmnopqrstuvwxyz';
const carasN = '0123456789';
const carasE = '@#$%&/!ªº_Ç';
let carasT;

function generar () {
    msge.innerHTML = "";
    let numDig = parseInt (cantidad.value);

    if (isNaN(numDig) || numDig == '') {
        msge.innerHTML = "Error: Falta seleccionar un número";
    } else if (numDig < 6 || numDig > 20) {
        msge.innerHTML = `Error: La cantidad (${numDig}) debe estar entre 6 y 20`;
    } else {
        carasT = carasA + carasB;
        if (checknums.checked) {
            carasT = carasT + carasN;
        }
        if (checkespe.checked) {
            carasT = carasT + carasE;
        }
        let passw = '';
        for (let i = 0; i < numDig; i++) {
            let carctAle = Math.floor(Math.random() * carasT.length);
            passw += carasT[carctAle];
        }
        contraResu.value = passw;
        validarPass(passw);
    }
}
//-----------------------------------------------------
function borrar () {
    msge.innerHTML = "";
    contraResu.value ="";
}
function copiar () {
    navigator.clipboard.writeText(contraResu.value);
}
//-----------------------------------------------------
function validarPass(passwo){
    msge.innerHTML = "";
    //msge.style.color = "black";
    let nivel = [0, 0, 0, 0];
    for (let i = 0; i < passwo.length; i++) {

        //console.log(toString(i) + " _ " +  carasA.search(passwo[i]));

        if (carasA.search(passwo[i]) >= 0){
            nivel [0] = 1;
        } else if (carasB.search(passwo[i]) >= 0){
            nivel [1] = 1;
        } else if (carasN.search(passwo[i]) >= 0){
            nivel [2] = 1;
        } else if (carasE.search(passwo[i]) >= 0){
            nivel [3] = 1;
        };
    }
    let calif = nivel[0] + nivel[1] + nivel[2] + nivel[3];
    
    console.log(nivel);
    console.log(calif);

    if (calif <= 1){
        msge.innerHTML = "Contraseña MUY DEBIL";
        msge.style.color = "red";
    } else if (calif == 2){
        msge.innerHTML = "Contraseña DEBIL";
        msge.style.color = "red";
    } else if (calif == 3){
        msge.innerHTML = "Contraseña FUERTE";
        msge.style.color = "black";
    } else {
        msge.innerHTML = "Contraseña MUY FUERTE";
        msge.style.color = "black";
    }
} 

