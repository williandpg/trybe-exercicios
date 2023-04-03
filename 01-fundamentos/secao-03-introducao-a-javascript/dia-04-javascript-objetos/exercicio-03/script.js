let student = {

}

function addProperty(object, key, value) {
  object[key] = value;
}

addProperty(student, 'nome', 'Willian Gonçalves');
addProperty(student, 'email', 'willian.p.g@outlook.com');
addProperty(student, 'telefone', '51-98918-6658');
addProperty(student, 'github', 'williandpg');
addProperty(student, 'linkedin', 'williangonçalvess');

for (let index in student) {
  console.log(student[index]);
}