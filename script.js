const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const result = new Function('return ' + display.value)();
    display.value = result;
  } catch {
    display.value = "Error";
  }
}
