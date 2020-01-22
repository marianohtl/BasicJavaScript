/* PARTE DO CÓDIGO QUE COLOCA NO OBJETO OS ÍTENS DO HTML
export default class slide {
constructor(slide, wrapper) {
this.slide = document.querySelector(slide);
this.wrapper = document.querySelector(wrapper);
} } */

export default class slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.dist = {finalPosition: 0, startX: 0, movement: 0
    }
    this.activeClass = 'active';
    
   
}  //objeto geral aonde sempre terá as referências dos números, neste objeto teremos uma referência do click inicial até aonde está o mouse no move
 
//COLOCANDO UMA PROPRIEDADE TRANSITION
transition(active){
  this.slide.style.transition = active ? 'transform .2s' : '';
}// tempo da transição


//método que move o slide
moveSlide(distX){
this.dist.movePosition = distX; // referência do valor que ele guarda no começo
 this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;

}

/* MÉTODO QUANDO COMEÇA */
updatePosition(clientX){
  this.dist.movement = this.dist.startX - clientX;
  //cáculo da diferença do click e do novo, salvando-o no movimento
  return (this.dist.finalPosition - this.dist.movement) * 1.5;  //podemos modificar a velocidade do moviment multiplicando este por um número 
}


onStart(event) {
//if e else para erificar se o envento é de toque ou é click
let movetype;
if(event.type === 'mousedown'){
  event.preventDefault();/*evento para previnir o bug inicial da imagem */ 
this.dist.startX = event.clientX; //aqui ele coloca no objeto a posição do mouse  >> o valor dist.startX é fixo, o valor clientX é um valor que vai sendo atualizado
movetype = 'mousemove';
}else{
  this.dist.startX = event.changeTouches[0].clientX; //evento de touch
  movetype = 'touchmove';
}
this.wrapper.addEventListener(movetype, this.onMove);//evento adicionado quando começamos o onclick
this.transition(false);//quando começa evento removemos transition (durante movimento)
}
/*classe para adicionarmos cada evento do slide*/

onMove(event){
  const ponteirPosition = ( event.type === 'mousemove') ? event.clientX : event.changeTouches[0].clientX; //operador Ternário para verificar se é mousemove ou touchmove
  const finalPosition = this.updatePosition(ponteirPosition);
  this.moveSlide(finalPosition);

}

onEnd(event){
  const movetype = (event.type === 'mouseup') ? 'mousemove' : 'touchmove';
  this.wrapper.removeEventListener(movetype, this.onMove);   //removendo o mover
  this.dist.finalPosition = this.dist.movePosition;//quando a pessoa tira o mouse de cima iremos guardar o valor na finalPosition
  this.transition(true);//quando termina evento adicionamos transition 
  this.changeSlideOnEnd();

}

changeSlideOnEnd(){
  if(this.dist.movement > 120 && this.index.next !== undefined){
    this.activeNextSlide();
  }else if(this.dist.movement < 120 && this.index.prev !== undefined){
    this.activePrevSlide();
  } else {
    this.changeSlide(this.index.active);
  }
}


addSlideEvents(){
  this.wrapper.addEventListener('mousedown', this.onStart);//adicionando um evento ao wrapper
  this.wrapper.addEventListener('touchstart', this.onStart);//evento para touch
  this.wrapper.addEventListener('mouseup', this.onEnd);//evento adicionado quando 
  this.wrapper.addEventListener('touchend', this.onEnd);//evento para touch -respansivo
}


//cálculo de posicionamento para o centro
slidePosition(slide){
  const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
  console.log(margin);
  return -(slide.offsetLeft - margin); //retorna a posição exata que os elementos estão, centralizados e respansivos para POSITION EM slidePosition
}
//total da tela - total do elemento = margens, dividindo o valar por 2, temos uma das margens

//CONFIGURAÇÃO DE CADA SLIDE
slidesConfig(){
  //colocando cada slide em uma classe
  //desestruturando os filhos do slide e fazendo um map(retorna uma array modificada de acordo com o que foi usado no return) para retornar um objeto com algumas outras partes das quais precisamos 
  this.slideArray = [...this.slide.children].map((element) => {
    const position = this.slidePosition(element); //uma forma de pegar a posição do elemento 
    return {position, element};

  });
}

//o index da navegação dos slides
slidesIndexNav(index){
  const last = this.slideArray.length - 1; //quantos ítens temos em cada slide
 
  this.index = {
    prev: index ? index - 1 : undefined,
    active: index,
    next: index === last ? undefined : index + 1
  }
}


//função de mudança de slide conforme o indice slideArray
changeSlide(index){
  const activeSlide = this.slideArray[index];//atualizar slid e quando mudar posição
  this.moveSlide(activeSlide.position);
  this.slidesIndexNav(index);
  this.dist.finalPosition = activeSlide.position;
  this.changeActiveClass();//chamada da mudança
  //atualizando a distância do slide novo
}

//mudando o stilo  - colocando uma classe (ativa quando o slide mude) 
changeActiveClass(){
  this.slideArray.forEach(item => item.element.classList.remove(this.activeClass)) //fazendo um loop pelos lis para remover as classes ativas anteriores
  this.slideArray[this.index.active].element.classList.add(this.activeClass);
} 


//ativando a navegação anterior centralize e deslize
//se tiver slide anterior
activePrevSlide() {
  if(this.index.prev !== undefined) {this.changeSlide(this.index.prev);}     

}//valor anterior

//ativando a navegação posterior
//se tiver slide anterior
activeNextSlide() {
  if(this.index.next !== undefined) {this.changeSlide(this.index.next); 
  }
} //valor anterior



/*Quando houver resize, atualiza a posição */
onResize(){
  //set time out para esperar um s. para alinha img na tela após a alteração no tamanho da window
  setTimeout(() => {
  this.slidesConfig();//função que atualiza a array com a conf de onde está o nosso elemento
  this.changeSlide(this.index.active);//reposiciona o slide ativo
}, 1000);
}

//quando mecher a tela o this.onresize é chamado
addResizeEvent(){
  window.addEventListener('resize', this.onResize);
}

/* Para que o this seja uma refecia oa objeto (no caso o slide), temos que criar um bind (todo evento dentro de classe tem que ter o bind) */

//para todos os eventos que criarmos teremos o método bindevent

bindEvents(){
  this.onStart = this.onStart.bind(this); //mesma coisa que está sendo feita no construtor, porém com uma função expecífica
  this.onMove = this.onMove.bind(this);
  this.onEnd = this.onEnd.bind(this);

  this.onResize = this.onResize.bind(this);
}


/*quando iniciar adicionamos os eventos na classe init*/
init(){
  this.bindEvents();
  this.transition(true);
  this.addSlideEvents();
  this.slidesConfig();
  this.addResizeEvent();
  return this;
}
}

//8:00-148- debouch -faltou- 