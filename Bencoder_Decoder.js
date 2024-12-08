document.getElementById('encodeBtn').addEventListener('click', () => {
    const text = document.getElementById('textInput').value;
    if (text.trim() === '') {
        document.getElementById('resultOutput').value = 'Please enter some text to encode.';
        return;
    }
    let binarySteps = text
        .split('')
        .map(char => `${char} -> ${char.charCodeAt(0)} -> ${char.charCodeAt(0).toString(2).padStart(8, '0')}`)
        .join('\n');

    const binary = text
        .split('')
        .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
        .join(' ');

    document.getElementById('resultOutput').value = `Encoding Steps:\n${binarySteps}\n\nFinal Binary:\n${binary}`;
});

document.getElementById('decodeBtn').addEventListener('click', () => {
    const binary = document.getElementById('textInput').value.trim();
    if (binary === '') {
        document.getElementById('resultOutput').value = 'Please enter binary text to decode.';
        return;
    }

    try {
        const decodeSteps = binary
            .split(' ')
            .map(bin => {
                const charCode = parseInt(bin, 2);
                return `${bin} -> ${charCode} -> ${String.fromCharCode(charCode)}`;
            })
            .join('\n');

        const text = binary
            .split(' ')
            .map(bin => String.fromCharCode(parseInt(bin, 2)))
            .join('');

        document.getElementById('resultOutput').value = `Decoding Steps:\n${decodeSteps}\n\nFinal Text:\n${text}`;
    } catch (e) {
        document.getElementById('resultOutput').value = 'Invalid binary input! Ensure it is in proper format.';
    }
});

document.getElementById('resetBtn').addEventListener('click', () => {
    document.getElementById('textInput').value = '';
    document.getElementById('resultOutput').value = '';
});
