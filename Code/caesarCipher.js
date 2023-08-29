function caesarCipher(string) {
    const shiftAmount = 1;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    let result = "";

    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (alphabet.includes(char.toLowerCase())) {
            const isUpperCase = char === char.toUpperCase();
            const charIndex = alphabet.indexOf(char.toLowerCase());
            const shiftedIndex = (charIndex + shiftAmount) % 26;
            const shiftedChar = alphabet[shiftedIndex];

            result += isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;
        } else {
            result += char;
        }
    }

    return result;
}

export default caesarCipher;