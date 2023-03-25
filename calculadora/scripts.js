const display = document.getElementById('display');
const historyBtn = document.getElementById('historyBtn');
const historyContainer = document.getElementById('historyContainer');
const historyList = document.getElementById('historyList');
let history = [];

historyBtn.addEventListener('click', () => {
  historyContainer.hidden = !historyContainer.hidden;
});

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  const lastChar = display.value.slice(-1);
  if (!isNaN(lastChar) && lastChar !== '.') {
    display.value += operator;
  }
}

function clearDisplay() {
  display.value = '';
}

function addToHistory(operation, result) {
  history.push({ operation, result });
  const listItem = document.createElement('li');
  listItem.textContent = `${operation} = ${result}`;
  historyList.appendChild(listItem);
}

function calculateResult() {
  try {
    const result = eval(display.value);
    addToHistory(display.value, result);
    display.value = result;
  } catch (error) {
    alert('Expresión no válida');
  }
}

