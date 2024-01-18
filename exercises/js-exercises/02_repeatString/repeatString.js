const repeatString = function(str, num) {
    // Specify string that will be added to and returned
    let rStr = "";

    // Return error if num < 0
    if (num < 0) {
        return "ERROR"
    }

    // Add string to return string "num" amount of times
    for (let i = 0; i<num; i++) {
        rStr = rStr + str;
    }
    
    return rStr;
};

console.log(repeatString('hey', -1));

// Do not edit below this line
module.exports = repeatString;