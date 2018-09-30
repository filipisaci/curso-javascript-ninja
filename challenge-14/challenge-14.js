(function() {
    /*
    Envolva todo o código desse desafio em uma IIFE.
    */

    /*
    Crie um array chamado numberObjects. Esse array deve ter 10 elementos. Cada
    elemento será um objeto no formato:
    { number: [NUMBER] }
    Os números devem ser de 1 a 10.
    Mostre esse array no console.
    */
    // Ele usou um for para popular o array
    console.log( 'Number Objects Array:' );
    var numberObjects = [];
    for (i = 1; i <= 10; i++) {
      numberObjects.push({number: i});
    }
    console.log(numberObjects);
    /*
    Crie um array chamado `justNumbers`, que terá como elementos somente os
    números do array criado acima. Mostre esse novo array no console.
    */
    console.log( '\nJust Numbers:' );
    var justNumbers = numberObjects.map(function (item) {
        return item.number;
    });
    console.log(justNumbers);

    /*
    Crie um novo array chamado `justMod2Or3`, que receberá do array criado acima
    somente os números que forem divisíveis por 2 ou 3. Mostre esse novo array
    no console.
    */
    console.log( '\nJust module of division by 2 or 3:' );
    var justMod2Or3 = justNumbers.filter(function (item) {
        return item % 2 == 0 || item % 3 == 0
    });
    console.log(justMod2Or3);

    /*
    Declare uma variável chamada operation que receba, do array criado acima,
    um valor reduzido pela seguinte operação:
    - Somar 1 ao último valor retornado;
    - Multiplicar o resultado pelo valor atual.
    O cálculo deve começar com zero.
    Mostre o resultado no console.
    */
    console.log( '\nOperation:' );
    const reducer = (accumulator, item) => (accumulator + 1) * item;
    var operation = justMod2Or3.reduce(reducer, 0);
    console.log(operation);

    /*
    Faça o mesmo cálculo passado acima, mas começando do último item para o
    primeiro. O nome da variável deve ser operation2. Mostre o resultado no
    console.
    */
    console.log( '\nOperation 2:' );
    const reducerRight = (proximo, corrente) => (proximo + 1) * corrente;
    const operation2 = justMod2Or3.reduceRight(reducerRight, 0);
    console.log(operation2);

    /*
    Crie um array chamado `name`. Cada elemento desse array deve ser uma sílaba
    do seu nome. Vamos reduzir esse array, juntando todas as sílabas, mas usando
    a "língua do P".
    PS.: Lembra da língua do "P"? Não? A língua do "P" é uma brincadeira
    infantil, onde você coloca a letra "P" antes de cada sílaba de uma palavra
    falada, como se você estivesse falando em código xD
    */
    console.log( '\nSeu nome na língua do "P":' );
    var name = ['Fi', 'li', 'pi'];
    var newarr = name.map(function (item) {
      return item = 'p' + item;
    }).reduce(function (acc, next) {
      return acc + next;
    });
    console.log(newarr);
    console.log( '\nSeu nome na língua do "P" (Correção):' );
    console.log(name.reduce((acc, atual) => acc + 'P' + atual), '');

    /*
    Crie uma variável chamada `inversedName`, que reduzirá o array em uma string
    e atribuirá o seu nome invertido (usando o array criado acima).
    */
    console.log( '\nInversed Name:' );
    var inversedName = name
                        .reduce((acc, next) => acc + next)
                        .split('').reverse().join('');
    console.log(inversedName);
    console.log( '\nInversed Name (Correção)):' );
    var inversedName = name.reduceRight((acc, atual) => acc + atual);
    console.log(inversedName);


    /*
    Mostre no console o array `numberObjects`.
    */
    console.log( '\nNumber objects' );
    console.log(numberObjects);

    /*
    Verifique se existem em algum índice de numberObjects um objeto ìgual a
    { number: 2 }. Se houver, mostre no console:
    - "Existe um objeto { number: 2 } em numberObjects!"
    Senão, mostre a frase:
    - "Não existe um objeto { number: 2 } em numberObjects :("
    Consegue prever o resultado? Deixe uma mensagem no console tentando explicar
    o que acontece ;)
    */
    console.log( '\nExiste um { number: 2 } em numberObjects?' );
    var idx = numberObjects.indexOf({ number: 2 });
    if (idx === -1) {
      console.log('Não existe um objeto { number: 2 } em numberObjects :(');
    } else {
      console.log('Existe um objeto { number: 2 } em numberObjects no indice:', idx);
    }
    // O resultado será que não existe {number: 2}, porque ao passar um objeto literal é criado uma nova referencia na memória

    /*
    Fazendo o mesmo do exercício acima, mas começando a buscar do último índice,
    será que obtemos um resultado diferente? Faça a busca a partir do índice 2.
    */
    console.log( '\nE buscando a partir do último índice, o { number: 2 } existe?' );
    var idx = numberObjects.lastIndexOf({ number: 2 }, 2);
    if (idx === -1) {
      console.log('Não existe um objeto { number: 2 } em numberObjects :(');
    } else {
      console.log('Existe um objeto { number: 2 } em numberObjects no indice:', idx);
    }

    /*
    Verifique se `justMod2Or3` é um array. Se for, mostre-o no console, no
    formato de String.
    */
    console.log( '\njustMod2Or3 é um array? Se for, a representação dele em String é:' );
    if (Array.isArray(justMod2Or3)) {
      console.log(justMod2Or3.toString());
    }
})();
