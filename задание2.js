jsonString = `{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;

let list = new Array();

class Person{
  constructor(name, age, prof){
    this.name = name;
    this.age = age;
    this.prof = prof;
  }
};

const data = JSON.parse(jsonString);

for (i = 0; i < data.list.length; i++){
  person = data.list[i];
  let result = new Person(person.name, person.age, person.prof);
  list.push(result);
};

console.log(list)
