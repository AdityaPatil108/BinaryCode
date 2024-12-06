// script.js
document.getElementById('decimal-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const decimal1 = parseInt(document.getElementById('decimal1').value, 10);
    const decimal2 = parseInt(document.getElementById('decimal2').value, 10);
    const operation = document.getElementById('operation').value;

    if (isNaN(decimal1) || isNaN(decimal2)) {
        document.getElementById('result').textContent = 'Error: Please enter valid decimal numbers!';
        return;
    }

    // Convert decimal inputs to binary
    const binary1 = decimal1.toString(2);
    const binary2 = decimal2.toString(2);

    let binaryResult;
    let decimalResult;
    let operationSymbol;
    let steps = '';

    // Perform the operation in binary (convert to decimal for calculations)
    switch (operation) {
        case 'add':
            decimalResult = decimal1 + decimal2;
            binaryResult = (parseInt(binary1, 2) + parseInt(binary2, 2)).toString(2);
            operationSymbol = '+';
            break;
        case 'subtract':
            decimalResult = decimal1 - decimal2;
            binaryResult = (parseInt(binary1, 2) - parseInt(binary2, 2)).toString(2);
            operationSymbol = '-';
            break;
        case 'multiply':
            decimalResult = decimal1 * decimal2;
            binaryResult = (parseInt(binary1, 2) * parseInt(binary2, 2)).toString(2);
            operationSymbol = '×';
            break;
        case 'divide':
            if (decimal2 === 0) {
                document.getElementById('result').textContent = 'Error: Division by zero is not allowed!';
                return;
            }
            decimalResult = Math.floor(decimal1 / decimal2);
            binaryResult = Math.floor(parseInt(binary1, 2) / parseInt(binary2, 2)).toString(2);
            operationSymbol = '÷';
            break;
        default:
            document.getElementById('result').textContent = 'Invalid operation selected!';
            return;
    }

    // Prepare steps for output
    steps += `<p>Step 1: Convert Decimal ${decimal1} to Binary: ${binary1}</p>`;
    steps += `<p>Step 2: Convert Decimal ${decimal2} to Binary: ${binary2}</p>`;
    steps += `<p>Step 3: Perform ${operation.charAt(0).toUpperCase() + operation.slice(1)} (${binary1} ${operationSymbol} ${binary2}): ${binaryResult} (Binary)</p>`;
    steps += `<p>Step 4: Convert Binary Result (${binaryResult}) to Decimal: ${decimalResult}</p>`;

    // Display the results with steps
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p><strong>Operation: ${operation.charAt(0).toUpperCase() + operation.slice(1)}</strong></p>
        ${steps}
        <p><strong>Final Results:</strong></p>
        <p>Binary Result: ${binaryResult}</p>
        <p>Decimal Result: ${decimalResult}</p>
    `;
});

document.getElementById('reset-button').addEventListener('click', function() {
    document.getElementById('decimal1').value = ''; // Clear Decimal Number 1
    document.getElementById('decimal2').value = ''; // Clear Decimal Number 2
    document.getElementById('result').innerHTML = ''; // Clear the steps and result
});
