
function showMessage(message)  {
    document.getElementById('message').textContent = message;
}


/*let price = 9, // declarando multi variveis com o ,
    name = 'Chris',
    discounted = false
*/

showMessage('OIEIEA')

// Constans ---------------------------

//const price = 36 // variavel imutavel por ser const

//price = 5  daria um error

//showMessage(price) -


// Vars -------------------------

// showMessage(price) // não da erro se tiver algum problea caso eu declare Var

let price = 80;

price = price+20// operação basica

let acrecimo = 1.2
// -----------------------------------------------------------

// showMessage(price) // não da erro se tiver algum problea caso eu declare Var

// showMessage(typeof prince) // tipo de dado

// showMessage((price++ * acrecimo) * 1.2) // ++ adiciona anteriormente e aparece se printar
// price++ só aparece depois no console.log ---------------- ambas funções funcionam com --

let ab = 20 + 2;



let name = 'Christian';
let message = `Oi ${name}`; // funciona igual o format ou f{}

// message = message.toUpperCase() colocando maiusculo

//--------------------

let message_num = '123' // se eu somar isso ao 2 somente printa 1233

showMessage(message_num + 2)

// CONVERTENDO NUMERO

let messagen = 123
// convertendo

let mensagem = Number.parseFloat('A154'); // se verificar o tipo fica numerico mas se so ver a msg fica NAN
// let mensagem = Number.parseFloat('A154');


// mensagem_string = mensagem();

showMessage(typeof mensagem) // passando para numeroo se for apenas showMessage


// boleanos -------------------

let saved = true;

// negativa do boleano -
saved = !saved  // fica como falso

// null e etc

// informações null não aparecem graficamente


// Objetos e variaveis

let pessoa = {  // declarando uma variavel, funciona como um dicionário
    primeiro_nome: 'Chris',
    ultimo_nome: 'Basilio'
};

showMessage(pessoa.primeiro_nome);

// Programação de Flow de codagem ---------------------------------------------------------------------------------

// if no javascript ----

// IF no JS
let x = 5;

// if (x === 5) {
   // showMessage('É cacete 5');
// }


// da falso
let a = 1.1 + 1.3;

if ( a.toFixed(2) == 2.4) { // o fixed funciona = o round no python
    let reponse = 'oi';
    showMessage(reponse);  // 2 igual junto faz conversão automatica
};

// if else ----------------

let preco = 30

if (preco >= 20) {
    response_1 = 'Está muito caro';
    showMessage(response_1);
    ad = 1
}
else if (preco < 20) {
    response_2 = 'Está em conta';
    showMessage(response_2);
    ad = 2
}

console.log(ad)

// Ternary operator -------------------------------------
let too = (price <= 20) ?  showMessage('ta barato') : showMessage('ta caro seu fudido');  // funciona como um if simplificado

// block scope não posso acessar informações que estão dentro do if com o let, mas com o VAR sim

if (true) {
    var valor = 'sim'; // com let nao funciona
    showMessage(valor);
}

console.log(valor)


// uso do for ---------------------------------------------------------------------------------------

for (let i = 0; i < 3; i++) { // primeiro declara variavel, condição e incrementação -
    console.log(i)
}


// uso do while