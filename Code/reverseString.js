function reverseString(string) {
    let str = "";
    for (var i = string.length - 1; i >= 0; i--) {
        str += string.charAt(i);
    }
    return str;
}

module.exports = reverseString;