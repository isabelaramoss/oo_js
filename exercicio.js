function Aluno(nome){
  this.nome = nome;

  this.apresenta = function(){
    console.log(`Meu nome é ${this.nome}.`);
  }
}

function InfosAlunos(nome, idade, materiaFavorita){
  this.nome = nome;
  this.idade = idade;
  this.materiaFavorita = materiaFavorita;

  Aluno.call(this, nome);
}

//Instâncias:
const aluno1 = new InfosAlunos("Maria", "10", "Português");
const aluno2 = new InfosAlunos("João", "9", "Artes");
const aluno3 = new InfosAlunos("Beatriz", "10", "História");

console.log(aluno1);
aluno1.apresenta();

console.log(aluno2);
aluno2.apresenta();

console.log(aluno3);
aluno3.apresenta();