let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Primeira parte
function addTurno(object, key, value) {
  object[key] = value;
}

addTurno(lesson2, 'turno', 'noite');

//Segunda parte
function listKey(lesson) {
  return Object.keys(lesson);
}

//Terceira parte
function tamanhoObj(lesson) {
  return Object.keys(lesson).length;
}

//Quarta parte
function listValue(lesson) {
  return Object.values(lesson);
}

//Quinta parte
let allLessons = Object.assign({}, {
  lesson1: lesson1,
  lesson2: lesson2,
  lesson3: lesson3,
});

//Sexta parte
function totalEstudantes(estudantes) {
  return allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes
}

//Sétima parte
function getValueByNumber(valor, posicao) {
  return Object.values(valor)[posicao];
}

//Oitava parte
function verifyPair(object, key, value) {
  let entries = Object.entries(object);
  let isEqual = false;
  for (let index in entries) {
    if (entries[index][0] === key && entries[index][1] === value) isEqual = true;
  }
  return isEqual;
}