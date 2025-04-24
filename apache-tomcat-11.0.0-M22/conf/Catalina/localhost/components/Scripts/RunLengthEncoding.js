function runLengthEncoding(string) {
    let encodedString = [];
    let count = 1;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i + 1] && count < 9) {
            count++;
        } else {
            encodedString.push(count + string[i]);
            count = 1;
        }
    }

    return encodedString.join("");
}