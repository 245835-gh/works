
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

