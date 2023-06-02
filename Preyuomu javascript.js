
<title>прийоми джаваскрипт</title>
<div class="1">
// Задати температуру в градусах за Цельсієм. Вивести в alert відповідну температуру в градусах за Фаренгейтом. 
// Підказка: розрахунок йде за формулою: Tf = (9/5)*Tc + 32, де Tf – температура за Фаренгейтом, Tc – температура за Цельсієм.
 <script>
			// Отримання температури в градусах Цельсія від користувача
let temperatureCelsius = parseFloat(prompt("Введіть температуру в градусах Цельсія:"));

// Розрахунок температури в градусах Фаренгейта
let temperatureFahrenheit = (9 / 5) * temperatureCelsius + 32;

// Виведення температури в градусах Фаренгейта за допомогою alert
alert("Температура в градусах Фаренгейта: " + temperatureFahrenheit.toFixed(2));
			</script>
			</div>
<div class="2">
// В змінній month лежить якесь число з діапазону від 1 до 12. 
// Визначте в яку пору року потрапляє цей місяць (зима, літо, весна, осінь) і яку цей місяць має назву. 
// Число з діапазону отримувати з допомогою модального вікна prompt, результат роботи виводити в модальному вікні alert.
let numb = 10000;
let counter = 0;

while (numb >= 50) {
  numb /= 2;
  counter++;
}

let result = numb;

console.log("Результат: " + result);
console.log("Кількість ітерацій: " + counter);
let month = parseInt(prompt("Введіть число від 1 до 12:"));

let season;
let monthName;

switch (month) {
  case 1:
  case 2:
  case 12:
    season = "зима";
    break;
  case 3:
  case 4:
  case 5:
    season = "весна";
    break;
  case 6:
  case 7:
  case 8:
    season = "літо";
    break;
  case 9:
  case 10:
  case 11:
    season = "осінь";
    break;
  default:
    season = "невідома пора року";
}

switch (month) {
  case 1:
    monthName = "січень";
    break;
  case 2:
    monthName = "лютий";
    break;
  case 3:
    monthName = "березень";
    break;
  case 4:
    monthName = "квітень";
    break;
  case 5:
    monthName = "травень";
    break;
  case 6:
    monthName = "червень";
    break;
  case 7:
    monthName = "липень";
    break;
  case 8:
    monthName = "серпень";
    break;
  case 9:
    monthName = "вересень";
    break;
  case 10:
    monthName = "жовтень";
    break;
  case 11:
    monthName = "листопад";
    break;
  case 12:
    monthName = "грудень";
    break;
  default:
    monthName = "невідомий місяць";
}

alert("Пора року: " + season + "\nНазва місяця: " + monthName);
</div>
<div class="3">
// Дано число numb = 10000. 
// Діліть його на 2 стільки раз, поки результат ділення не стане менше 50. 
// Число яке отримаєте, запишіть в змінну result. Порахуйте кількість ітерацій,  необхідних для цього і запишіть її в змінну counter.
// Результат записаний в змінні result і counter виведіть в консолі.
<script>
let numb = 10000;
let result = numb;
let counter = 0;
while (result >=50){
    result /=2;
    counter++;
}
console.log("Результат:",result);
console.log("Кількість ітерацій:",counter);
</script>
</div>
<div class="4">
//З допомогою циклу do…while написати функцію для виведення чисел від 0 до 10, щоб результат виводу був відповідний зразку:
	// 0 – це нуль
	 // 1 – непарне число
	 // 2 – парне число
	 // 3 – непарне число
   	//	…
	 // 10 – парне число
	 <script>
let i = 0;
do {
  let p=i;
  if(i ===0){
p="Нуль: "+ i;
  }
  if (i % 2===0){
    p="Парне число:" +i;
  }
  else{
    p="Непарне число:" +i;
  }
console.log(p);
i++;
} while(i<=10);
</script>
</div>
<div class="5">
// З допомогою циклу while вивести всі прості числа в проміжку від 0 до 100
<script>
let i = 0;
while (i < 101  ) { // показується 0, далі 1, потім 2
  console.log( i );
  i++;
  }
</script>
</div>
<div class="6">
//Отримати з модального вікна prompt число від 1 до 7, і вивести в вікні браузера день неділі, якому відповідає задане число.
<script>
// Отримання числа від 1 до 7 від користувача за допомогою prompt
let number = parseInt(prompt("Введіть число від 1 до 7:"));

// Визначення дня тижня відповідно до заданого числа
let day;

switch (number) {
  case 1:
    day = "Неділя";
    break;
  case 2:
    day = "Понеділок";
    break;
  case 3:
    day = "Вівторок";
    break;
  case 4:
    day = "Середа";
    break;
  case 5:
    day = "Четвер";
    break;
  case 6:
    day = "П'ятниця";
    break;
  case 7:
    day = "Субота";
    break;
  default:
    day = "Некоректне число";
}

// Виведення дня тижня в вікні браузера
document.write("День неділі: " + day);

</script>
</div>
<div class="7">
// Дано три рисунки 200*300 пікселів. 
// З використанням властивості elem.onclick прив'яжіть до кожного рисунку обробник подія, щоб при натисканні на картинку alert виводив значення її атрибуту src.
<!DOCTYPE html>
<html>
<head>
  <title>Обробка подій на рисунках</title>
  <style>
    .img {
      width: 200px;
      height: 300px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <img class="img" src="3.jpg" onclick="showImageSrc(this)">
  <img class="img" src="7.jpg" onclick="showImageSrc(this)">
  <img class="img" src="fone background.jpg" onclick="showImageSrc(this)">

  <script>
    function showImageSrc(element) {
      var src = element.getAttribute("src");
      alert("Атрибут src: " + src);
    }
  </script>
</body>
</html>
</div>
<div class="8">
// Дано  три посилання. 
// З використанням методу addEventListener, removeEventListener прив'яжіть до кожного посилання обробник події, щоб при наведенні на посилання в атрибут title записувався його текст.
<!DOCTYPE html>
<html>
<head>
  <title>Обробка подій на посиланнях</title>
</head>
<body>
  <a href="#" id="link1">Посилання 1</a>
  <a href="#" id="link2">Посилання 2</a>
  <a href="#" id="link3">Посилання 3</a>

  <script>
    var link1 = document.getElementById("link1");
    var link2 = document.getElementById("link2");
    var link3 = document.getElementById("link3");

    link1.addEventListener("mouseover", addTitle);
    link2.addEventListener("mouseover", addTitle);
    link3.addEventListener("mouseover", addTitle);

    link1.addEventListener("mouseout", removeTitle);
    link2.addEventListener("mouseout", removeTitle);
    link3.addEventListener("mouseout", removeTitle);

    function addTitle(event) {
      var link = event.target;
      var text = link.innerText;
      link.setAttribute("title", text);
    }

    function removeTitle(event) {
      var link = event.target;
      link.removeAttribute("title");
    }
  </script>
</body>
</html>
</div>
<div class="9/1">
// Дано  три посилання. 
// З використанням методу addEventListener, removeEventListener прив'яжіть до кожного посилання обробник події, щоб при наведенні на посилання в кінець його тексту дописувався href в круглих дужках.
<!DOCTYPE html>
<html>
<head>
  <title>Обробка подій на посиланнях</title>
</head>
<body>
  <a href="https://example.com" id="link1">Посилання 1</a>
  <a href="https://google.com" id="link2">Посилання 2</a>
  <a href="https://facebook.com" id="link3">Посилання 3</a>

  <script>
    var link1 = document.getElementById("link1");
    var link2 = document.getElementById("link2");
    var link3 = document.getElementById("link3");

    link1.addEventListener("mouseover", appendHref);
    link2.addEventListener("mouseover", appendHref);
    link3.addEventListener("mouseover", appendHref);

    link1.addEventListener("mouseout", removeHref);
    link2.addEventListener("mouseout", removeHref);
    link3.addEventListener("mouseout", removeHref);

    function appendHref(event) {
      var link = event.target;
      var href = link.getAttribute("href");
      var text = link.innerText;
      link.innerText = text + " (" + href + ")";
    }

    function removeHref(event) {
      var link = event.target;
      var text = link.innerText;
      link.innerText = text.replace(/\s*\([^)]*\)$/, "");
    }
  </script>
</body>
</html>
</div>
<div class="9/2">
// Доповніть попередню задачу: після першого наведення на посилання слід відв'язати від неї подію, яка додає href в кінець тексту.
<!DOCTYPE html>
<html>
<head>
  <title>Обробка подій на посиланнях</title>
</head>
<body>
  <a href="https://example.com" id="link1">Посилання 1</a>
  <a href="https://google.com" id="link2">Посилання 2</a>
  <a href="https://facebook.com" id="link3">Посилання 3</a>

  <script>
    var link1 = document.getElementById("link1");
    var link2 = document.getElementById("link2");
    var link3 = document.getElementById("link3");

    link1.addEventListener("mouseover", appendHrefOnce);
    link2.addEventListener("mouseover", appendHrefOnce);
    link3.addEventListener("mouseover", appendHrefOnce);

    function appendHrefOnce(event) {
      var link = event.target;
      var href = link.getAttribute("href");
      var text = link.innerText;
      link.innerText = text + " (" + href + ")";

      link.removeEventListener("mouseover", appendHrefOnce);
    }
  </script>
</body>
</html>
</div>
<div class="10">
// Дано три  елементи input. 
// Прив'яжіть всім input такий обробник: по втраті фокусу (подія blur) кожен input виводить своє значення (value) в абзац з id = “demo“
<!DOCTYPE html>
<html>
<head>
  <title>Виведення значення input</title>
</head>
<body>
  <input type="text" id="input1">
  <input type="text" id="input2">
  <input type="text" id="input3">
  <p id="demo"></p>

  <script>
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var input3 = document.getElementById("input3");
    var demo = document.getElementById("demo");

    input1.addEventListener("blur", handleInputBlur);
    input2.addEventListener("blur", handleInputBlur);
    input3.addEventListener("blur", handleInputBlur);

    function handleInputBlur(event) {
      var input = event.target;
      demo.innerText += input.value + ", ";
      input.value = ""; // Закоментуйте цей рядок, якщо хочете зберегти значення в полі введення
    }
  </script>
</body>
</html>
</div>
<div class="11">
// Для всіх input зробіть так, щоб вони виводили значення value з використанням функції alert, при натисканні на будь-який з них, але тільки за першим натискання. 
// Повторне натискання на input не повинно викликати реакції.
<!DOCTYPE html>
<html>
<head>
  <title>Виведення значення input через alert</title>
</head>
<body>
  <input type="text" id="input1">
  <input type="text" id="input2">
  <input type="text" id="input3">

  <script>
    var inputs = document.querySelectorAll("input");
    var isFirstClick = true;

    function handleInputClick(event) {
      if (isFirstClick) {
        var input = event.target;
        var value = input.value;
        alert(value);
        isFirstClick = false;
      }
    }

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("click", handleInputClick);
    }
  </script>
</body>
</html>
</div>
<div class="12">
// Дано три параграфи з числами. При натисканні на параграф в ньому повинен з'явиться квадрат числа, яке він містить.
<!DOCTYPE html>
<html>
<head>
  <title>Квадрат числа при натисканні на параграф</title>
  <style>
    p {
      cursor: pointer;
    }
  </style>
</head>
<body>
  <p>2</p>
  <p>5</p>
  <p>8</p>

  <script>
    var paragraphs = document.querySelectorAll("p");

    function handleParagraphClick(event) {
      var paragraph = event.target;
      var number = parseInt(paragraph.innerText);
      var square = number * number;
      paragraph.innerText = square;
    }

    for (var i = 0; i < paragraphs.length; i++) {
      paragraphs[i].addEventListener("click", handleParagraphClick);
    }
  </script>
</body>
</html>
</div>
<div class="13">
//Дано три елементи input. Зробіть так, щоб всі input по втраті фокусу перевіряли свій вміст на правильну кількість символів. Скільки символів має бути в input, вказується в атрибуті data-length. Якщо вбито правильну кількість, то границя input стає зеленою, якщо неправильне - червоною.
<!DOCTYPE html>
<html>
<head>
  <title>Перевірка кількості символів в input</title>
  <style>
    .valid {
      border: 2px solid green;
    }

    .invalid {
      border: 2px solid red;
    }
  </style>
</head>
<body>
  <input type="text" data-length="5">
  <input type="text" data-length="8">
  <input type="text" data-length="10">

  <script>
    var inputs = document.querySelectorAll("input");

    function handleInputBlur(event) {
      var input = event.target;
      var length = input.getAttribute("data-length");
      var value = input.value;

      if (value.length == length) {
        input.classList.remove("invalid");
        input.classList.add("valid");
      } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
      }
    }

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("blur", handleInputBlur);
    }
  </script>
</body>
</html>
</div>
<div class="14">
// Дано три елементи <div>.
//  По першому натискання на кожен <div>, він фарбується червоним кольором, по другому натисканні фарбується в попередній колір і так далі кожен клік відбувається чергування фону.
//  Рекомендовано зробити дві функції: одна фарбує в червоний колір, інша в зелений і вони змінююють одна одну шляхом використання removeEventListener.  
<!DOCTYPE html>
<html>
<head>
  <title>Чергування фонового кольору</title>
  <style>
    .red {
      background-color: red;
    }

    .green {
      background-color: green;
    }
  </style>
</head>
<body>
  <div></div>
  <div></div>
  <div></div>

  <script>
    var divs = document.querySelectorAll("div");
    var currentColor = "red";

    function handleDivClick(event) {
      var div = event.target;

      if (currentColor === "red") {
        div.classList.remove("green");
        div.classList.add("red");
        currentColor = "green";
      } else {
        div.classList.remove("red");
        div.classList.add("green");
        currentColor = "red";
      }
    }

    function toggleColor() {
      for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener("click", handleDivClick);
      }
    }

    toggleColor();
  </script>
</body>
</html>
</div>
<div class="15">
// Використовуючи методи об'єкту Date створити функцію, яка буде повертати і виводити в консолі поточний час (в момент виклику функції) у відповідному форматі
	 // 09:15:56, середа , 06 травня 2020 року 
<!Doctype html>
<html>
<head>
<title></title>
</head>
<body>
<script>
function getCurrentTime() {
  var date = new Date();

  var hours = addLeadingZero(date.getHours());
  var minutes = addLeadingZero(date.getMinutes());
  var seconds = addLeadingZero(date.getSeconds());

  var day = getDayName(date.getDay());
  var month = getMonthName(date.getMonth());
  var dayOfMonth = date.getDate();
  var year = date.getFullYear();

  var formattedTime = hours + ":" + minutes + ":" + seconds;
  var formattedDate = day + ", " + dayOfMonth + " " + month + " " + year + " року";

  console.log(formattedTime + ", " + formattedDate);
}

function addLeadingZero(number) {
  return number < 10 ? "0" + number : number;
}

function getDayName(dayIndex) {
  var days = ["неділя", "понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота"];
  return days[dayIndex];
}

function getMonthName(monthIndex) {
  var months = [
    "січня", "лютого", "березня", "квітня", "травня", "червня",
    "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"
  ];
  return months[monthIndex];
}

getCurrentTime();
</script>
</body>
</html>
</div>
<div class="16">
// Використовуючи функції для створення модальних вікон prompt, alert, confirm і об'єкт Math, розробити додаток-гру “Вгадай число”. Користувачу надається право вгадати число з діапазону від 0 до 100, яке програма генерує випадково. Якщо користувач не вгадав, додаток вказує наскільки користувач відхилився від загаданого числа і запропонує вгадати ще раз. Відхилення вів діапазону визначати фразами “холодно”, “гаряче”, “дуже холодно”, “дуже гарячу”, “холодніше”, “тепліше” тощо.
	// Якщо користувач вгадав число з діапазону  то йому виводиться повідомлення про кількість спроб, які йому знадобилися для вгадування вірного значення, а також саме число яке потрібно було вгадати. Наприклад “За 10 спроб ви вгадали число 33”. І потім задається запитання спробувати ще раз зіграти в гру. Якщо відповідь позитивне, то процес починається з початку.
	// Кожну спроба супроводжувати в консолі наступним текстом
 	// “02.03.2020 16:01:33 Спроба 1: число 23 – не вірно”
	<!Doctype html>
<html>
<head>
<title></title>
</head>
<body>
<script>
function guessNumberGame() {
  var playAgain = true;
  
  while (playAgain) {
    var targetNumber = generateRandomNumber(0, 100);
    var attempts = 0;
    var guessed = false;
  
    while (!guessed) {
      var userGuess = prompt("Вгадайте число від 0 до 100:");
      attempts++;
  
      if (userGuess === null) {
        break;
      }
  
      userGuess = parseInt(userGuess);
  
      if (isNaN(userGuess)) {
        alert("Введено некоректне значення. Будь ласка, спробуйте ще раз.");
        continue;
      }
  
      if (userGuess === targetNumber) {
        guessed = true;
        alert("Ви вгадали число!");
      } else {
        var temperature = getTemperature(userGuess, targetNumber);
        alert("Ви не вгадали число. " + temperature);
      }
    }
  
    if (userGuess === null) {
      break;
    }
  
    alert("За " + attempts + " спроб ви вгадали число " + targetNumber + ".");
  
    playAgain = confirm("Спробувати ще раз?");
  }
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getTemperature(guess, target) {
  var difference = Math.abs(guess - target);
  
  if (difference >= 50) {
    return "Дуже холодно";
  } else if (difference >= 30) {
    return "Холодно";
  } else if (difference >= 10) {
    return "Тепло";
  } else {
    return "Дуже гаряче";
  }
}

guessNumberGame();

</script>
</body>
</html>
</div>
