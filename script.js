setInterval(escreverhora, 1000);
setInterval(escreverdia, 1000);

function escreverhora(){
let horatxt = document.querySelector('p#hora')
let hora = new Date().getHours();

    if (hora<6){
        horatxt.innerHTML=(`Boa madrugada (vai dormir, gaggle!)`);
        document.querySelector('img#tempo').src="image/madrugada.jpg";
    } else if(hora<12){
        horatxt.innerHTML=(`Bom dia, beba awa!`)
        document.querySelector('img#tempo').src="image/bomdia.jpg";
    } else if(hora<18){
        horatxt.innerHTML=(`Boa tarde, miudo trabalhador!`)
        document.querySelector('img#tempo').src="image/boatarde.jpg";
    } else{
        horatxt.innerHTML=(`Boa noite e bons sonhos!`)
        document.querySelector('img#tempo').src="image/boanoite.jpg";
} }

function escreverdia(){
let diatxt = document.querySelector('p#dia')
let dia = new Date().getDay();

switch(dia){
    case 0: diatxt.innerHTML=(`Tenha um bom Domingo!`);
    break;
    case 1: diatxt.innerHTML=(`Tenha uma boa Segunda`);
    break;
    case 2: diatxt.innerHTML=(`Tenha uma boa Terça`);
    break;
    case 3: diatxt.innerHTML=(`Tenha uma boa Quarta`);
    break;
    case 4: diatxt.innerHTML=(`Tenha uma boa Quinta`);
    break;
    case 5: diatxt.innerHTML=(`Tenha uma boa Sexta`);
    break;
    case 6: diatxt.innerHTML=(`Tenha um bom Sábado`);
    break; }
}