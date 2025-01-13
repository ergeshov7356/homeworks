let firstUserName = "Alisher";
let secondUserName = "Nooruz";
let thirdUserName = "Jakshylyk";
let fourthUserName = "Aziret";

let firstUserPoint = 97;
let secondUserPoint = 89;
let thirdUserPoint = 75;
let fourthUserPoint = 90;
console.log(secondUserName);
console.log(firstUserName);
console.log(thirdUserName);
console.log(fourthUserName);

console.log(firstUserPoint);
console.log(secondUserPoint);
console.log(thirdUserPoint);
console.log(fourthUserPoint);

let resultAlisher = `${firstUserName} -97 баллов из 100`;
let resultNooruz = `${firstUserName} -89 баллов из 100`;
// let resultJakshylyk = `${firstUserName} "-97 баллов из 100"`;
let resultJakshylyk = thirdUserName + "-" + "75 баллов из 100";
// let resultAziret = `${firstUserName} "-97 баллов из 100"`;
let resultAziret = fourthUserName + "-" + "90 балловаиз 100";
console.log(resultAlisher);
console.log(resultNooruz);
console.log(resultJakshylyk);
console.log(resultAziret);

let averAge = (97 + 89 + 75 + 90) / 4;
let average = "Экзамендин орточо баллы:" + averAge;
console.log(average);

for (let i = 1; i <= 4; i += 1) {
  for (let j = 1; j <= 9; j += 1) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}
//
alert("Вы успешно зарегистрировались!");

//
let allert = confirm(
  "При перезагрузке сайта, введённые данные на форме будут очищены, Вы уверены что хотите перезагрузить?"
);
alert(allert);
console.log(allert);

//

let namee = prompt("Введите ваще имя");
console.log(namee);
