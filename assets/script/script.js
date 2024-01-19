//Declaracion de variales y rutas
imgClick = document.getElementById('imgClick')

inputStickers01 = document.getElementById('inputStickers01')
inputStickers02 = document.getElementById('inputStickers02')
inputStickers03 = document.getElementById('inputStickers03')
spanStickers = document.getElementById('spanStickers')
buttonStickers = document.getElementById('buttonStickers')


codigo1 = document.getElementById('codigo1')
codigo2 = document.getElementById('codigo2')
codigo3 = document.getElementById('codigo3')
spanPassword = document.getElementById('spanPassword')
buttonPassword = document.getElementById('buttonPassword')

//Carga de option
    for(i=1;i<=9;i++){ 
        var option = document.createElement("option");
        option.text = i;
        codigo1.add(option);
     }
     for(i=1;i<=9;i++){ 
        var option = document.createElement("option");
        option.text = i;
        codigo2.add(option);
     }
     for(i=1;i<=9;i++){ 
        var option = document.createElement("option");
        option.text = i;
        codigo3.add(option);
     }

//funciones Click
imgClick.addEventListener("click", function(e){
    alert("funciona");
});

buttonStickers.addEventListener("click", function(e){
    alert("funciona");

});

buttonPassword.addEventListener("click", function(e){

});