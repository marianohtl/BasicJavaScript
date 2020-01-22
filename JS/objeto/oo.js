// Princípio do encapsulamento
// - ter os detalhes de implementação escondidos e mostrar para quem precisa usar aquele sistema ou coisa, uma interface simples para que possamos interagir com determinado objeto

// Para podermos usar o carro, precisamos...
// aprender a trabalhar com direção
// aprender a trabalhar com a marcha
// aprender a ligar o carro
// colocar a gasolina para que ele continue andando

//Coisas que não precisamos conhecer  _informações escondidas/encapsuladas dentro do objeto carro_
// Como o combustível é queimado dentro do motor
// Como funciona as válvulas do carro
// Por que o carro tem mais ou menos cavalos

// estas coisas encapsuladas dentro do objeto carro e você lida apenas com a interface entre você e o carro
//Nós temos que lidar apenas com a interface de comunicação entre você e o carro
//O nível de abstração de um carro para o outro pode variar.
// não há necessidade de conhecer os detalhes internos para podermos se comunicar

// carro montadora a > dois giros para passar a marcha para frente
// carro montadora b > apertar um botão para por a marcha para frente

//existe a necessidade de uma adaptação,  por conta da interface de comunicação existe diferença


// carro montadora a > 
// carro montadora b > altera a quantidade de cavalos do motor

// No caso dos carros acima o que mudou foi a implementação interna.
// a interface de comunicação permanece a mesma
//(Não precisamos nos adaptar a mudança interna do carro)

// ronda civic 98 > 2018 , a adaptação será suave
// internamente a implementação mudou 
// quando mudamos a implementação interna de um objeto, quem o usa não necessariamente precisará se adaptar
// Logo se existe uma mudança interna não há necessidade de adaptação, se há mudança externa, existe a necessidade dessa adaptação.

// muitos objetos com tudo exposto > baixo nível de encapsulamento (gera uma dependência maior dentre todos os objetos)
// se escondemos os detalhes de implementação e expomos apenas uma interface de comunicação _apenas algumas coisas ficam visíveis para o mundo interior_, a chance de haver algum acoplamento grande é menor, pois boa parte do detalhe está interno

//não existe sistema sem acoplamento _sem comunicação entre os objetos_ a comunicação entre os objetos é mais importante do que a implementação interna deles 
// _é simples mudar a implementação_
// _mas se os objetos se comunicam de uma forma excessiva entre si, qualquer coisa que você muda em um objeto pode gerar impacto em outro, e em outro_

//4 - HERANÇA (prototype)
//Princípio baseado na realação é / um 
// Reuso a partir de comporsição
//ex. carro (carro é um objeto) composto por motor (motor é um objeto) 
// não há necessidade de colocar a complexidade de motor dentro do carro _ podemos simplesmente dizer que o carro tem um motor e a complexidade do motor estará dentro do objeto motor, este quebrável em outras partes menores_ 
// assim temos objetos mais complexos a partir da composição de objetos mais simples

// HERANÇA significa que recebemos atributos e comportamentos de um objeto pai
// pai e mãe, recebemos características _atributos do pai_ _atributos da mãe_ _cor do olho, cor do cabelo_
// algumas linguagens permitem que você tenha um único pai
// outras permitem _herança múltipla_, termos múltiplos pais -> o pai pode ter um outro pai 

// relações do tipo é um
// o ser humano é um animal > o ser humano é um mamífero > mamífero é um animal
// civic é um carro, ferrari é um carro
//as características de um objeto mais generico passa para os objetos que estão abaixo
// mamífero é um animal , mas nem todo animal é um mamífero, mas um ser humano é um mamífero
//herança
// o carro tem um motor > o carro tem portas > a porta tem parafusos (a partir daí vamos compondo os objetos mais coplexos de objetos mais simples)


// priorize a composição sobre a herança
// é melhor que você sempre favoreça a composição


//POLIMORFISMO (múltiplas formas)
//celular _conceito genêrico e abstrato_
// I-Phone, Galaxy, Moto-z
// A partir do conceito genêrico conseguimos criar objetos.
//Podemos usar o conceito genêrico de carro que podemos substituir por objetos concretos.
// Podemos usar um carro e uma hora ele aponta para uma ferrari, outra você pode substituir por um Uno, você pode substituir diferentes conceitos concretos e trabalhar em um nível mais abstrato.
//polimorfismo significa múltiplas formas, ou seja, a partir de uma variável de um tipo mais genérico _ex carro_, e somos capazes de atribuir a uma ferrari, um civic a um uno, temmos um relação entre carro e os tipos concretos, e quando temos uma relação de herança, uma classe filha pode ser referenciada em uma variável do tipo pai
// você tem um variável pai _genérica_ e podemos atribuir a tipos e subtipos

// 4 princípios importantes
//abstração 
//encapsulamento
//herança
//polimorfismo

