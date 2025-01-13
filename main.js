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

//
let number = 4;
console.log("1 x " + number + "=" + number * 1);
console.log("2 x " + number + "=" + number * 2);
console.log("3 x " + number + "=" + number * 4);
console.log("5 x " + number + "=" + number * 5);
console.log("6 x " + number + "=" + number * 6);
console.log("7 x " + number + "=" + number * 7);
console.log("8 x " + number + "=" + number * 8);
console.log("9 x " + number + "=" + number * 9);
console.log("10 x " + number + "=" + number * 10);
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
