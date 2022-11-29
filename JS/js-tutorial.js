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

// -----------------------------------------------------------------------------------------

// 1. Вивести перші 10 парних чисел за допомогою цикла for . 
//      Реалізувати задачу двома способами .

//const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ,20, 21, 22, 23, 24, 25];

// for (let index = 0; index <= 100; index += 2) {
//   console.log(index);
  
// };

//-------------------------------------------------------------------------------------------

// 2. Є масив із 10 чисел . 
//      За допомогою цикла for вивести елементи масива в зворотньому порядку .
  
//const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 100; i >= 0; i--) {
//   //const element = array[i];
//   console.log(i);
// }

//--------------------------------------------------------------------------------------

// 1. Дано масив arr1 [1, 2, 3, 4, 5, 6] . 
//   Створити новий масив arr2 , і додати в нього всі числа із масиву arr1 , 
//   які більші за 2 і менші за 6

// const arr1 = [1, 2, 3, 4, 5, 6];
// let arr2 = [];

// for (let index = 0; index < arr1.length; index++) {
//   const element = arr1[index];
  

//   if (element > 2 && element < 6 ) {
//     arr2.push(element);
//   }
  
// }
// console.log(arr2);

// const arr1 = [1, 2, 3, 4, 5, 6];
 
// const arr2 = arr1.filter(function(item) {
//   if (item > 2 && item < 6) {
//     return true;
//   }
// } );
// console.log(arr2);


// ---------------------------------------------------------------------------------------

//   2. Дано масив arr1 [1, 1, 3, 5, 6, 6, 1, 4, 2, 2]
//   Cтворити новий масив arr2 , у якому будуть тільки унікальні елементи масиву arr1
//   Тобто результат має бути arr2 = [1, 3, 5, 6, 4, 2]

// const arr1 =  [1, 1, 3, 5, 6, 6, 1, 4, 2, 2];
// const arr2 = [];

// for (const item of arr1) {
//   if (!arr2.includes(item)) {
//     arr2.push(item)
//   } 
  
// }
// console.log(arr2);

//---------------------------------------------------------------------------------------

// const arr1 =  [1, 1, 3, 5, 6, 6, 1, 4, 2, 2];

// let count = 0;


// for (let index = 0; index < arr1.length; index++) {
  
//   if (arr1[index] === 1) {
//     count += 1;
//   }
// }
// console.log(count);

//-------------------------------------------------------------------------------

  // 1. Дано масив ['container-1', 'container-10', 'container-4', 'container-6', 'container-11']
  // Останнє число - індекс контейнера .
  // Будь-яким способом створити новий масив , де будуть елементи із першого масиву ,
  // у яких індекс контейнера більший за 5.
  // Результатом має бути масив ['container-10' , 'container-6', 'container-11']

  // Підказка : так як кожен елемент масиву має формат 'container-{number}' ми можемо використати
  // метод split() , щоб дістати number із строки .

// const arr1 = ['container-1', 'container-10', 'container-4', 'container-6', 'container-11'];
// const arr2 = [];

//   for (let index = 0; index < arr1.length; index++) {
//      const element = arr1[index];
//      const devided = element.split("-");
//      const conteinerIndex = devided[1];

//     if (conteinerIndex > 5) {
//        arr2.push(element); 
//     }
  
// };
// console.log(arr2);


// --------------------------------------------------------------------------------

//   2. Дано масив ['box-1', 'box-10', 'box-4', 'box-6', 'box-11', 'box-9']
//   Відсортувати масив у порядку зростання індексів боксів
//   Результат має бути ['box-1', 'box-4', 'box-6', 'box-9', 'box-10', 'box-11']
//   В задачах , де треба щось сортувати , не обійтись без методу sort()
//   Тому треба знати , як він працює .

// const arr1 = ['box-1', 'box-10', 'box-4', 'box-6', 'box-11', 'box-9'];

// arr1.sort(function(a, b) {
  
//   const devidedA = a.split("-");
//   const conteinerIndexA = +devidedA[1];
//   const devidedB = b.split("-");
//   const conteinerIndexB = +devidedB[1];
//   return conteinerIndexA - conteinerIndexB;
//   console.log(conteinerIndexB);
//   console.log(conteinerIndexA);
//   console.log(a, b);
// })
// console.log(arr1);

//----------------------------------------------------------------------------
//1. Відсортувати елементи масиву у порядку спадання: [1, 2, 3, 5, 6, 1, 4, 8, 9, 2]

// arr1 = [1, 2, 3, 5, 6, 1, 4, 8, 9, 2];

// arr1.sort(function(a, b) {
//   console.log(a, b);
//   if(a > b ){
//     return -1;
//   }else{
//     return 1;
//   }
 
// })
// console.log(arr1);



// ---------------------------------------------------------------------------------
//   3. Створити функцію checkIfElementExists(id) , яка приймає id DOM елемента 
//   і перевіряє , чи є даний елемент в поточному DOM дереві . 
//   Якщо елемент є , то дати наступні стилі цьому елементу :
//   width: 100px, height: 100px, background-color: lavender

//   Якщо елемента немає , то вивести у консоль "Елемента з id : {введений id} не існує"

// const Idmatches  = document.querySelector("#hello-world");

// function checkIfElementExists(id) {
//         const element = document.getElementById(id)
//         if (element) {
//           element.addEventListener("click", function() {
//             console.log(element.innerHTML);
//           })
//           element.style.width = "100px"
//           element.style.height = "100px"
//           element.style.backgroundColor = "lavender";
//         } else {
//           console.log(`Елемента з id : ${id} не існує`)
//         }
// }
// checkIfElementExists("hello-world");



// const button = document.querySelector(".button");

// button.addEventListener("click", () => {
//   button.classList.toggle("newClass")

//   console.log(button.className)
//   console.log(button.classList)
// })

//--------------------------------------------------------------------------------------
//2. Дано масив [1, 2, 3, 4, 5] . За допомогою метода map створити новий масив , 
//де будуть елементи першого масиву , помножені на 2
// const arr1 = [1, 2, 3, 4, 5];


// const result = arr1.map(() => {
  
// })
// console.log(result);

//------------------------------------------

// 3. Дано масив ['hello', 'world', 'i', 'am', 'vadim'] . 
// За допомогою метода map створити новий масив , 
// де будуть довжини рядків із першого масиву
//   Тобто результат буде [5, 5, 1, 2, 5]

// const arr1 = ['hello', 'world', 'i', 'am', 'vadim'];

// const arr2 = arr1.map((item, index) => item.length)
// console.log(arr2);

//-------------------------------------------------------------------------------

// 1. Із серверу приходить масив даних , в якому зберігаються імена юзерів . 
//             ['Nazar', 'Vadim', 'Solomia', 'Zahar', 'Serafima', 'Manuil']
//   Потрібно створити контейнер div із класом users-list і цей контейнер 
//   заповнити іменами із масиву . Імена мають розташовуватись в колонку одне під одним .

// const array = ['Nazar', 'Vadim', 'Solomia', 'Zahar', 'Serafima', 'Manuil'];
// const container = document.querySelector('.container');
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];

  
//   const newElement = document.createElement('div');
//   newElement.innerText = `${element}`;
//   newElement.className = 'users-list' ;
//   newElement.style.color = 'red';
//   newElement.style.marginBottom = '10px';
//   container.appendChild(newElement);
// }

//-----------------------------------------------------------------------------------
  
// 2. Є масив із чотирьох кольорів : ['red', 'green', 'blue', 'orange']
// І масив із чотирьох чисел: [34, 21, 56, 87]
// Додати у верстку контейнер із id = 'numbers-container'

// Пробігтись по масиву чисел і кожне число додати в контейнер , кожному числу задати колір із першого масиву .
// індекс кольору відповідає індексу числа з масиву .
// Результат має бути наступним: 
// const fontSize = ["16px", "20px", "10px", "25px"];
// const colors = ['red', 'green', 'blue', 'orange'];
// const numbers = [34, 21, 56, 87];

// const container = document.querySelector("#numbers-container");
// const paragraph = document.querySelector(".paragraph")
  
// for (let index = 0; index < numbers.length; index++) {
//      const element = numbers[index];
     
//      const newElement = document.createElement('p');
//      newElement.className = 'paragraph' ;
//      newElement.innerText = `${element}`;   
//      newElement.style.color = colors[index];
//      newElement.style.fontSize = fontSize[index];
//      console.log(newElement); 
//      container.appendChild(newElement);
// }


// for (let index = 0; index < colors.length; index++) {
//   const element = colors[index];
//   paragraph.style.color = `${element}`;
//   paragraph.appendChild(element);
//   console.log(paragraph);
// }



/* <div id="numbers-container">
        <p style="color: red;">34</p>
        <p style="color: green;">21</p>
        <p style="color: blue;">56</p>
        <p style="color: orange;">87</p>
      </div> */

  //-----------------------------------------------------
// const car = {
//   name: "Tesla",
//   model: "Model X",
//   color: "white",
//   price: {
//     currency: "EUR",
//     value: 25000
//   },
//   is4x4: true,
//   drive: () => {
//     console.log("I am driving");
//   },
//   power: () => {
//     console.log("I am charging");
//   },
//   wheels: [],
//   owner: {
//     firsName: "Vadym",
//     lastName: 'Besarab'
//   },
//   logThis: function()  {
//     console.log(this);
//   },

// }
// car.logThis();

// const El = document.createElement("p");
// console.log(El);

// ----------------------------------------------------



  // Homework 4

  // Повертаємось до методів масиву в комбінації з об'єктами .
  // Є масив юзерів: users = [
  //   {
  //     id: 1,
  //     firstName: 'Nazar',
  //     lastName: 'Kovalenko',
  //     age: 20,
  //     email: "nazarii.dev@gmail.com"
  //   },
  //   {
  //     id: 2,
  //     firstName: 'Leanne',
  //     lastName: 'Graham',
  //     age: 45,
  //     email: "leanne.dev@ua.biz"
  //   },
  //   {
  //     id: 3,
  //     firstName: 'Ervin',
  //     lastName: 'Howell',
  //     age: 34,
  //     email: "leanne.dev@de.rt"
  //   },
  // ]

  //----------------------------------------------------------------------------------------

  // users = [
  //   {
  //     id: 1,
  //     firstName: 'Nazar',
  //     lastName: 'Kovalenko',
  //     age: 20,
  //     email: "nazarii.dev@gmail.com"
  //   },
  //   {
  //     id: 2,
  //     firstName: 'Leanne',
  //     lastName: 'Graham',
  //     age: 45,
  //     email: "leanne.dev@ua.biz"
  //   },
  //   {
  //     id: 3,
  //     firstName: 'Ervin',
  //     lastName: 'Howell',
  //     age: 34,
  //     email: "leanne.dev@de.rt"
  //   },
  // ]

// const findUserID = users.find(user => user.id === 3);
// console.log(findUserID.firstName);
// console.log(findUserID.lastName);

// const findUserAge = users.filter(user => user.age > 30);
// console.log(findUserAge);

// const newAge = users.map((element) => {
//   element.age = 20;
//   console.log(element);
//   return element;
// });
// console.log(newAge);

// 

// const findUserMail = users.filter((element) => {
//   const userEmail = element.email.split('@');
//   const domain = userEmail[1];
//   if (domain === 'gmail.com') {
//     return true;
//   }
  
// });
// console.log(findUserMail);


//   1. За допомогою метода find знайти юзера з id = 3 і вивести в консоль його повне ім'я .
//   2. За допомогою метода filter створити новий масив , у якому будуть юзери , у яких age > 30
//   3. За допомогою метода map створити новий масив із масиву users і кожному юзеру змінити вік на 20 . 
//   ( перший масив має залишитись без змін )
//   4. За допомогою метода forEach кожному юзеру записати нове рандомне id ( загугли як генерувати рандомне id на js ) . 
//   id має замінитись у вихідному масиві , тобто в масиві users . Новий масив робити не потрібно
//   5. За допомогою метода filter створити новий масив , де будуть юзери , у яких домен пошти @gmail.com .


//   Lesson 5

//   Колбек
//   Колбек або Callback або функція зворотнього виклику - це функція , яка передається параметром
//   в іншу функцію і викликається там .

//   const foo = () => { console.log('I am a callback!') }

//   const bar = (callback) => {
//     callback()
//   }

//   bar(foo)

//   Ми створили функцію foo і передали її в функцію bar і викликали її там . 

//   Коли ми використовуємо методи масиву map , filter , find і т.д. ми теж передаємо першим параметром колбек-функцію

//   [1, 2, 3, 'a', 'b', 'c'].filter((item) => {
//     return typeof item === 'number'
//   })

//   (item) => {
//     return typeof item === 'number'
//   }  -------- це і є колбек . ми могли переписати код так:

//   сonst callback = (item) => {
//     return typeof item === 'number'
//   }

//   [1, 2, 3, 'a', 'b', 'c'].filter(callback)

//   Результат буде таким самим . 

// -------------------------------------------------------------


  
  // Є масив відео , які приходять із серверу :
  // const videos = [
  //   {
  //     id: 1,
  //     title: "Africa nature",
  //     views: 203583,
  //     likes: 1376,
  //     dislikes: 101,
  //     tags: ['nature', 'africa', 'beauty', 'sunset'],
  //     user: {
  //       id: 232,
  //       name: 'Alex',
  //       numberVideos: 120
  //     }
  //   },
  //   {
  //     id: 2,
  //     title: "My son",
  //     views: 345353,
  //     likes: 1232,
  //     dislikes: 23323,
  //     tags: ['family', 'son'],
  //     user: {
  //       id: 232,
  //       name: 'Alex',
  //       numberVideos: 120
  //     }
  //   },
  //   {
  //     id: 3,
  //     title: "Lions in Africa",
  //     views: 234343244224,
  //     likes: 32323232,
  //     dislikes: 93843,
  //     tags: ['lions', 'nature'],
  //     user: {
  //       id: 432,
  //       name: 'Dolora',
  //       numberVideos: 3435
  //     }
  //   },
  //   {
  //     id: 4,
  //     title: "Japan",
  //     views: 4334,
  //     likes: 123,
  //     dislikes: 11,
  //     tags: ['japan', 'culture'],
  //     user: {
  //       id: 232,
  //       name: 'Alex',
  //       numberVideos: 120
  //     }
  //   },
  // ]

  // Уявімо , що ми робимо фільтрацію на сайті .

  // 1. Показати тільки ті відео , у яких id юзера = 232

// const videosToShow = videos.filter((video) => {
//   console.log(video);

//   if (video.user.id === 232) {
//     return true;
//   }
  
// });
// console.log(videosToShow);
  // 2. Показати тільки ті відео , у яких кількість лайків > 1000

// const videosToShow = videos.filter((video) => {
//   console.log(video);

//   if (video.likes > 1000) {
//     return true;
//   }
  
// });
// console.log(videosToShow);

  // 3. Показати тільки ті відео , у яких в тегах є 'nature'

// const videosToShow = videos.filter((video) => {
//   console.log(video);

//   if (video.tags.includes('nature')) {
//     return true;
//   }
  
// });
// console.log(videosToShow);


  // 4. Показати тільки ті відео , у яких в тегах є 'nature' і 'sunset'

//   const videosToShow = videos.filter((video) => {

//   if (video.tags.includes('nature' && 'sunset' && "africa")) {
//     return true;
//   }
  
// });
// console.log(videosToShow);
  // 5. Показати тільки ті відео , у яких у користувача , який залив це відео , кількість відео < 200

//  const videosToShow = videos.filter((video) => {

//   if (video.user.numberVideos < 200) {
//     return true;
//   }
  
// });
// console.log(videosToShow);
  
  // 6. Показати відео , у яких кількість дизлайків > за кількість лайків .

//   const videosToShow = videos.filter((video) => {

//   if (video.dislikes > video.likes) {
//     return true;
//   }
  
// });
// console.log(videosToShow);

// -----------------------------------------------------------

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newAarr = arr.filter((item) => item > 3);
// console.log(newAarr);

//------------------------------------------------------------

// На сайті https://jsonplaceholder.typicode.com/ описане апі ,
//  до якого ти можеш звертатися.
//  Тобі потрібно ознайомитись з API та отримати масив юзерів за допомогою fetch.
// У верстці зроби контейнер , в який потім будеш додавати список юзерів . 
// Коли отримаєш масив юзерів із запиту,
//   то перебери його будь - яким способом і виведи на сторінку в контейнер.
//   Має бути його ім‘я, пошта, місто, назва компанії і геопозиція(lat, lng)

// function getUsers() {
//   const container = document.querySelector("#users-container");

//      fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => {
//       const markup = data.map(item =>
//         `<ul class="user-data-thumb">
//          <li>Name: ${item.name}</li>
//          <li>Email: ${item.email}</li>
//          <li>Address: ${item.address.city}</li>
//          <li>Company Name: ${item.company.name} </li>
//          <li>Location: ${item.address.geo.lat}, ${item.address.geo.lng}</li>
//          </ul>
//       `).join("");
//       container.innerHTML = markup;
//       console.log(markup);
//     })
       
//     .catch(error => console.log("Error" + error));

// } 
//  getUsers()


const arrowFunction = (a, b, c) => {
  return a + b + c;
}

const arrowFunction2 = () => a + b + с;


fetch(bejekjfkejbekjbkejkej){
  
}