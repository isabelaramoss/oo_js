function Pessoa(nome){
  this.nome = nome;

  this.apresenta = function(){
    console.log(`Meu nome é ${this.nome}.`);
  }
}

function InfosAlunos(nome, idade, materiaFavorita){
  this.nome = nome;
  this.idade = idade;
  this.materiaFavorita = materiaFavorita;

  Pessoa.call(this, nome);
}

function InfosProfessores(nome, idade, materiaLecionada){
  this.nome = nome;
  this.idade = idade;
  this.materiaLecionada = materiaLecionada;

  Pessoa.call(this, nome);
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

const professor1 = new InfosProfessores("Lívia", "40", "Geografia");
const professor2 = new InfosProfessores("Matheus", "32", "Biologia");
const professor3 = new InfosProfessores("Adriana", "60", "Matemática");

console.log(professor1);
professor1.apresenta();

console.log(professor2);
professor2.apresenta();

console.log(professor3);
professor3.apresenta();
