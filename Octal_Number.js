function convertToOctal() {
    const decimalInput = document.getElementById('decimalInput').value;
    const stepsElement = document.getElementById('steps');
    const resultElement = document.getElementById('result');

    if (decimalInput === '') {
        alert('Please enter a decimal number.');
        return;
    }

    let decimalNumber = parseInt(decimalInput, 10);
    let steps = '';
    let octalNumber = '';

    steps += `Starting with Decimal Number: ${decimalNumber}<br>`;

    while (decimalNumber > 0) {
        const remainder = decimalNumber % 8;
        steps += `Divide ${decimalNumber} by 8: Quotient = ${Math.floor(decimalNumber / 8)}, Remainder = ${remainder}<br>`;
        octalNumber = remainder + octalNumber; // Add remainder to the result
        decimalNumber = Math.floor(decimalNumber / 8);
    }

    resultElement.innerHTML = `Decimal: ${decimalInput} → Octal: ${octalNumber}`;
    stepsElement.innerHTML = steps || 'No steps to display.';
}

function convertToDecimal() {
    const octalInput = document.getElementById('octalInput').value;
    const stepsElement = document.getElementById('steps');
    const resultElement = document.getElementById('result');

    if (octalInput === '') {
        alert('Please enter an octal number.');
        return;
    }

    if (!/^[0-7]+$/.test(octalInput)) {
        alert('Please enter a valid octal number (digits 0-7 only).');
        return;
    }

    let decimalNumber = 0;
    let steps = '';
    const octalDigits = octalInput.split('').reverse();

    steps += `Starting with Octal Number: ${octalInput}<br>`;

    octalDigits.forEach((digit, index) => {
        const contribution = parseInt(digit, 10) * Math.pow(8, index);
        steps += `Digit: ${digit}, Position (from right): ${index}, Contribution: ${digit} * 8^${index} = ${contribution}<br>`;
        decimalNumber += contribution;
    });

    resultElement.innerHTML = `Octal: ${octalInput} → Decimal: ${decimalNumber}`;
    stepsElement.innerHTML = steps || 'No steps to display.';
}

function resetFields() {
    document.getElementById('decimalInput').value = '';
    document.getElementById('octalInput').value = '';
    document.getElementById('result').innerHTML = '-';
    document.getElementById('steps').innerHTML = '-';
}
