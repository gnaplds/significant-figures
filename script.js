function calculateSignificantFigures() {
  // Get the input number from the input field
  let input = document.getElementById("inputNumber").value.trim();

  let significantFigures = 0;
  let decimalEncountered = false;
  let nonZeroEncountered = false;
  let significantDigits = []; // Array to store significant digits

  // Loop through each character in the input
  for (let i = 0; i < input.length; i++) {
      let c = input[i];

      // If we encounter a decimal point
      if (c === '.') {
          decimalEncountered = true;
      }
      // If the character is a non-zero digit, it is significant
      else if (c >= '1' && c <= '9') {
          nonZeroEncountered = true;
          significantFigures++;
          significantDigits.push(c); // Add significant digit
      }
      // If we encounter a zero
      else if (c === '0') {
          // Leading zeros before the first non-zero are not significant
          if (nonZeroEncountered) {
              // Zeros between or after non-zero digits are significant
              significantFigures++;
              significantDigits.push(c); // Add significant digit
          }
      }
  }

  // If no decimal and there are trailing zeros, ignore them (for whole numbers)
  if (!decimalEncountered) {
      // Remove trailing zeros in whole numbers
      for (let i = input.length - 1; i >= 0; i--) {
          if (input[i] === '0') {
              significantFigures--; // Subtract trailing zeros from significant figures count
              significantDigits.pop(); // Remove trailing zero
          } else {
              break; // Stop when we reach a non-zero digit
          }
      }
  }

  // Display the number of significant figures and the significant digits
  document.getElementById("significantCount").innerText = significantFigures;
  document.getElementById("significantDigits").innerText = significantDigits.join(', ');
}
