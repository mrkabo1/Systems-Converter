document
  .getElementById("converterForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const system = document.getElementById("system").value;
    const inputNumber = document.getElementById("tx").value;
    const resultDiv = document.getElementById("result");
    let result = "";
    if (!inputNumber || !system) {
      resultDiv.innerHTML = "Please choose a system and enter a number.";
      return;
    }
    switch (system) {
      case "bi":
        const decimalFromBinary = parseInt(inputNumber, 2);
        result = `Decimal: ${decimalFromBinary}, Hexadecimal: ${decimalFromBinary
          .toString(16)
          .toUpperCase()}, Octal: ${decimalFromBinary.toString(8)}`;
        break;
      case "de":
        result = `Binary: ${(+inputNumber).toString(
          2
        )}, Hexadecimal: ${(+inputNumber)
          .toString(16)
          .toUpperCase()}, Octal: ${(+inputNumber).toString(8)}`;
        break;
      case "hex":
        const decimalFromHex = parseInt(inputNumber, 16);
        result = `Binary: ${decimalFromHex.toString(
          2
        )}, Decimal: ${decimalFromHex}, Octal: ${decimalFromHex.toString(8)}`;
        break;
      case "oc":
        const decimalFromOctal = parseInt(inputNumber, 8);
        result = `Binary: ${decimalFromOctal.toString(
          2
        )}, Decimal: ${decimalFromOctal}, Hexadecimal: ${decimalFromOctal
          .toString(16)
          .toUpperCase()}`;
        break;
      default:
        result = "Invalid system selected.";
    }
    resultDiv.innerHTML = result;
  });
