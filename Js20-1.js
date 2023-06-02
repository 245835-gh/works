window.onload = function() {
  var calculator = document.createElement('div');
  calculator.classList.add('calculator');
  var display = document.createElement('input');
  display.type = 'text';
  display.classList.add('display');
  calculator.appendChild(display);
  var btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');
  var buttons = ['7', '8', '9', '/',
                 '4', '5', '6', '*',
                 '1', '2', '3', '-',
                 '0', '.', '=', '+', 'C', '%', '/', '²'];
  buttons.forEach(function(buttonText) {
    var button = document.createElement('button');
    button.textContent = buttonText;
    button.classList.add('btn');
    btnContainer.appendChild(button);
  });
  calculator.appendChild(btnContainer);
  document.body.appendChild(calculator);
  var buttons = document.querySelectorAll('.btn');
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      var value = this.textContent;
      if (value === '=') {
        calculate();
      } else if (value === 'C') {
        clearDisplay();
      } else if (value === '%') {
        calculatePercentage();
      } else if (value === '/') {
        calculateFraction();
      } else if (value === '²') {
        calculateSquare();
      } else {
        display.value += value;
      }
    });
  });
  function calculate() {
    try {
      var result = eval(display.value);
      display.value = result;
    } catch (error) {
      display.value = 'Помилка';
    }
  }
  function clearDisplay() {
    display.value = '';
  }
  function calculatePercentage() {
    var percentage = parseFloat(display.value) / 100;
    display.value = percentage;
  }
  function calculateFraction() {
    var fraction = 1 / parseFloat(display.value);
    display.value = fraction;
  }
  function calculateSquare() {
    var square = Math.pow(parseFloat(display.value), 2);
    display.value = square;
  }
};