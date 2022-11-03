// const number = +prompt("text");
// console.log(typeof number);

// if (number % 2 === 0) {
//   console.log("парне");
// } else {
//   console.log("не парне");
// }
//-------------------------------------------
// const a = +prompt("введіть число а");
// const b = +prompt("введіть число b");

// let answer = +prompt(`скільки буде помножити ${a} на ${b}?`);

// if (answer === a * b) {
//   console.log("Вірно");
// } else {
//   console.log(" Не Вірно");
// };
// ---------------------------------------------
// Якщо число менше за 1 вивести "Менше за 1"
// Якщо більше за 100 вивести "Більше за 100"
// Якщо лежить в проміжку від 1 до 100 вивести "Все ок"

// const x = +prompt("введіть число x в проміжку від 1 до 100");

// if (x < 1) {
//   console.log("Менше за 1");
// } else if (x > 100) {
//   console.log("Більше за 100");
// } else {
//   console.log("все ок");
// }
//---------------------------------------------------

// const button = document.querySelector(".button");

// button.addEventListener("click", onClick);

// function onClick() {
  // const timeOut = setTimeout(() => {
  //   alert("I love async JS!");
  // }, 1000);
  // //clearTimeout(timeOut);
  // };
//----------------------------------------------------

// const date = Date();
// console.log(date);

//----------------------------------------------------

// 1. 	Ініціалізувати масив з перших п'яти непарних чисел і присвоїти його змінній "arr". Перевірити , чи є в цьому масиві число 11 .
// 	Підказка . У масива є метод , який визначає чи є в ньому конкретний елемент . Метод повертає true , якщо є , false - якщо немає .
// 	Далі зробити перевірку: Якщо число є - вивести в консоль "Число 11 є в масиві" . Якщо ні - "Числа немає"

// const arr = [1, 3, 5, 7, 9, 11, 11];
// const number = 11;

// function findEleven() {
//   for (let i= 0; i < arr.length; i++) {
//     const element = arr[i];
    
//     if(element === number) {
//       console.log("Число 11 є в масиві");
//       break;
//       }else{
//         console.log("Числа немає");
//       }
//   }
// }
// findEleven();

//-----------------------------------------------------

// 2.	Є дві змінні X та Y . Потрібно у змінну X записати значення змінної Y , а в змінну Y записати значення X . 
// 	Вивести дві змінні у консоль .

// let x = 1;
// let y = 2;
// const temp = x;

// x = y;
// y = temp;
// console.log(x);
// console.log(y);

//-----------------------------------------------------

// 3.	За допомогою виклику prompt() запитати у юзера його ім'я і записати у змінну name .
// 	Вивести у консоль першу і останню букву ім'я юзера , а також кількість букв імені .
// 	Якщо кількість букв більша або дорівнює 10 , то вивести у консоль "Надто довге ім'я"

// let name = prompt("What's your name?");
// const lastIndex = 
// console.log(`${name}`);
// console.log(`${name}`.length);
// console.log(name[0]);
// console.log(`${name}`[name.length -1]);

// if (`${name}`.length >= 10) {
//   const message = "Надто довге ім'я";
//   console.log(message);
// }

//-------------------------------------------------------


// 4.	За допомогою виклику prompt() запитати у юзера його вік і записати у змінну age .
// 	Якщо йому менше 18 років , вивести у консоль "Вам сюди не можна" , якщо більше або дорівнює 18 - вивести у консоль
// 	"Welcome" . Якщо введене число буде від'ємним - вивести у консоль "Вік не може бути від'ємним"

// let userAge = +prompt("What's your age?");

// if (userAge >= 0 && userAge < 18) {
//   console.log("Вам сюди не можна");
// }else if(userAge >= 18) {
//   console.log("Welcome");
// }else if(userAge < 0) {
//   console.log("Вік не може бути від'ємним");
// }

//--------------

// let userAge = +prompt("What's your age?");
// const userAnswer = userAge >= 0 && userAge < 18 ? console.log("Вам сюди не можна") : userAge < 0 ? console.log("Вік не може бути від'ємним") : console.log("Welcome");

// ---------------------------------------------------------------

// 2. Є два масиви із різною кількістю елементів , порівняти цю кількість , 
// і якщо у першого більше , то вивести в консоль "arr1 has more items than arr2" , 
// якщо навпаки , то "arr2 has more items than arr1"

// let arr1 = [1, 2, 3];
// let arr2 = [1,2];

// arr1.length > arr2.length ? console.log("arr1 has more items than arr2") : "arr2 has more items than arr1"



//   3. Дано логін і пароль для авторизації на сайті : login=vadim password=123 . За допомогою prompt() запитати у юзера логін і пароль у форматі
//     "login password" .  Записати результат у змінну answer , дістати з неї логін і пароль і записати їх у змінні userLogin i loginPassword .
//     Далі за допомогою тернарного оператора перевірити правильність введених
//     даних , і якщо дані правильні - вивести 'Welcome' , інакше - 'Error'

// const userLogin = "vadim";
// const userPassword = "123";
// let userData = prompt("Введіть ваші дані в форматі {login password}");

// let login = userData.split(" ")[0];
// let password = userData.split(" ")[1];

// const message = login === userLogin &&  password === userPassword ? 'Welcome' : 'Error'
// console.log(message);