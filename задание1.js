const parser = new DOMParser();

xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

let list = new Array();

const xmlDOM = parser.parseFromString(xmlString, 'text/xml');
for (i=0; i<=1; i++) {
  const studentsList = xmlDOM.querySelector('list').querySelectorAll('student')[i];
  const name = studentsList.querySelector('name')
  const firstName = name.querySelector('first');
  const secondName = name.querySelector('second');
  const langAttr = name.getAttribute('lang');
  const ageNode = studentsList.querySelector('age');
  const profNode = studentsList.querySelector('prof');

  const student = {
    name: firstName.textContent + ' ' + secondName.textContent,
    age: ageNode.textContent,
    prof: profNode.textContent,
    lang: langAttr
  };
  list.push(student);}

console.log(list)
