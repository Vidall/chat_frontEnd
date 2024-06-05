const morsecode = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..--',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..',
    '0': '-----',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    ' ': ' ',
    '  ': ' ',
  };

// text to morse
function textToMorse(text) {
    return text.toUpperCase().split('').map(char => morsecode[char] || char).join(' ')
}

function morseTotext(morse) {
     const array3 = morse.split(' ').map(code => {
        for (let char in morsecode) {
            if (code == ' ') return ''
            if (code === morsecode[char]) return char
        }
        return code
    }).join(' ').toLowerCase().split('  ')

    const array2 = array3.map(code => code.split(' ').join(''))

    const array1 = array2.join(' ')

    return array1
}

export {textToMorse, morseTotext}

