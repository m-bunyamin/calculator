function apendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

// function calculate() {
//     try{
//         const result = eval(document.getElementById("display").value);
//     document.getElementById("display").value = result;
//     }catch (error) {
//         alert("Invalid Expression");

//     }
// }

function calculate() {
    const display = document.getElementById("display");
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }
  }
  