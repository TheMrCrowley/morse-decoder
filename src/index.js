const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    function exprToArr(expr) {
        const arr = [];
        for (let i = 0; i < expr.length; i += 10) {
            arr.push(expr.slice(i, i + 10));
        }
        return arr;
    }

    function arrToMorse(expr) {
        const morse = [];

        exprToArr(expr).forEach(item => {
            let substr = '';
            for (let i = 0; i < 10; i += 2) {
                if (item.includes('*')) {
                    substr = ' ';
                }
                if (`${item[i]}${item[i + 1]}` == '10') {
                    substr += '.';
                }
                if (`${item[i]}${item[i + 1]}` == '11') {
                    substr += '-'
                }
            }
            morse.push(substr);
        });
        return morse;
    }

    function morseToString(expr) {
        const strArr = [];

        arrToMorse(expr).forEach(item => {
            if (item === ' ') {
                strArr.push(item);
            }
            for (let key in MORSE_TABLE) {
                if (key === item) {
                    strArr.push(MORSE_TABLE[key])
                }
            }
        })

        return strArr.join('');
    }
    return morseToString(expr)
}

module.exports = {
    decode
}