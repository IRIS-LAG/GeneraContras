let botCopiar = document.getElementById('copiar');
let botBorrar = document.getElementById('borrar');
//-----------------------------------------------------
let checknums = document.getElementById('checkCN');
let checkespe = document.getElementById('checkCE');
//-----------------------------------------------------
let msge = document.getElementById('mensaje');
let cantidad = document.getElementById('cantidad');
let contraResu = document.getElementById('contrasena');

const carasL = 'ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxyz';
const carasN = '0123456789';
const carasE = '@#$%&/*!ªº';
let carasT;

function generar () {
    msge.innerHTML = "";
    let numDig = parseInt (cantidad.value);

    if (isNaN(numDig) || numDig == '') {
        msge.innerHTML = "Error: Falta seleccionar un número";
    } else if (numDig < 2 || numDig > 20) {
        msge.innerHTML = `Error: La cantidad (${numDig}) debe estar entre 2 y 20`;
    } else {
        carasT = carasL;
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
