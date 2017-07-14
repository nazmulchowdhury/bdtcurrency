function reverseString(inputString) {
    return inputString.split("").reverse().join("");
}

function createCurrencyForTaka(value) {
    var n = value.indexOf(".");
    var part1 = "";
    var part2 = "";
    if (n > -1) {
        part1 = value.substring(n);
        part2 = value.substring(0, n);
    } else {
        part2 = value;
    }
    var reverseValue = reverseString(part2);
    var numberList = reverseValue.split('');
    for (var i = 0; i < numberList.length; i++) {
        if (i >= 3 && i % 3 == 0) {
            numberList.splice(i, 0, ',');
        }
    }
    var numberAsString = numberList.join("");
    var reverseNumberAsString = "\u09F3" + reverseString(numberAsString) + part1;
    console.log(reverseNumberAsString);
}

createCurrencyForTaka('10000000000000.777');
