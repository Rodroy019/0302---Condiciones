//Declaracion de variales y rutas
const imgClick = document.getElementById('imgClick')

const inputStickers01 = document.getElementById('inputStickers01')
const inputStickers02 = document.getElementById('inputStickers02')
const inputStickers03 = document.getElementById('inputStickers03')
const spanStickers = document.getElementById('spanStickers')
const buttonStickers = document.getElementById('buttonStickers')

const codigo1 = document.getElementById('codigo1')
const codigo2 = document.getElementById('codigo2')
const codigo3 = document.getElementById('codigo3')
const spanPassword = document.getElementById('spanPassword')
const buttonPassword = document.getElementById('buttonPassword')

//Carga de option
    for(i=1;i<=9;i++){ 
        let option1 = document.createElement("option");
        option1.text = i;
        codigo1.add(option1);
        let option2 = document.createElement("option");
        option2.text = i;
        codigo2.add(option2);
        let option3 = document.createElement("option");
        option3.text = i;
        codigo3.add(option3);
     };

//funciones Click

imgClick.addEventListener("click", function(e){
    if (imgClick.style.border == 'none'){
        return imgClick.style.border = '2px solid red';
    }
        imgClick.style.border = 'none';
});

// Funcion Click para Stickers

buttonStickers.addEventListener("click", function(e){
    let suma = Number(inputStickers01.value) + Number(inputStickers02.value) + Number(inputStickers03.value);
    if (suma <= 10){
        return spanStickers.innerHTML = "Llevas " + suma + " stickers";
    }
    spanStickers.innerHTML = "Llevas demasiados stickers, el limite es 10"; 
});

// Funcion Click para password

buttonPassword.addEventListener("click", function(e){
    let password = codigo1.value + codigo2.value + codigo3.value;
    if (password == '991'){
        return spanPassword.innerHTML = "Password 1 Correcto";
    }else if (password == '714'){
        return spanPassword.innerHTML = "Password 2 Correcto";
    }
    spanPassword.innerHTML = "Password Incorrecto"; 
});