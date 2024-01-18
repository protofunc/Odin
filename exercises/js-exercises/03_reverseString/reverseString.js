const reverseString = function(str) {
    let rStr = "";
    for (let i = str.length-1; i >= 0; i--) {
        rStr = rStr + str[i];
    }
    return rStr;
};

// Do not edit below this line
module.exports = reverseString;
