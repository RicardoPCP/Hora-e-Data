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


if (window.location.pathname.includes('atv02.html')) {
const btnver = document.querySelector('input#verificar');
btnver.addEventListener('click',verificar);
function verificar(){
    let data = new Date();
    let ano = data.getFullYear();
    let inano = document.querySelector('input#idade');
    let innome = document.querySelector('input#nome');
    let naturalchk = document.querySelector('input[name="opcao"]:checked');
    let idade = ano - Number(inano.value);
    let img = document.querySelector('p.img');
    let natural = document.getElementsByName('opcao');
    let cidade = " "; 
        if (natural[0].checked){
            cidade = `Fofônia`
        } else
            cidade = `Gaggle City`

    if (innome.value.length==0) {
        window.alert(`Verifique a caixa de Nome e tente novamente!`)
    } else if (inano.value.length==0 || inano.value>ano || inano.value<=0) {
        window.alert(`Verifique a caixa de Ano e tente novamente!`)
    } else if (!naturalchk) {
        window.alert(`Verifique a opcao de nacionalidade e tente novamente.`)
    } else {
        img.innerHTML=(`Olá ${innome.value}, você tem ${idade} anos e é natural de ${cidade}!`)
            if (idade > 25 && cidade==`Gaggle City`) {
                img.innerHTML+=(`<p>Você é um Gaggle jurássico!</p>`);
            } else if (idade > 25 && cidade==`Fofônia`) {
            img.innerHTML+=(`<p>Você é um Fofônio jurássico!</p>`);
            }
}
        
    } }


if (window.location.pathname.includes('atv03.html')) {
const btnconte = document.querySelector('input#conte');
btnconte.addEventListener('click',vamoscontar);
function vamoscontar() { 
    let inicio = document.querySelector('input#inicio').value;
    let fim = document.querySelector('input#fim').value;
    let passo = document.querySelector('input#passo').value;
    let resul = document.querySelector('p#contagem');

    if (inicio.length==0||fim.length==0||passo.length==0){
        window.alert(`Verifique seus dados e tente novamente!`);
        return;
    } else {
    resul.innerHTML = (`Contando: `);
    i = Number(inicio);
    f = Number(fim);
    p = Number(passo);

    for(let c=i; c<=f; c+=p){
    resul.innerHTML += (`${c} - `);
    }     resul.innerHTML += (`FIM`); }
} } 