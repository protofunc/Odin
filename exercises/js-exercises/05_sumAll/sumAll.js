const sumAll = function (firstNum, secondNum) {
    // Errors for non-numbers and negative values
    if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum)) {
        return "ERROR";
    } else if (firstNum < 0 || secondNum < 0) {
        return "ERROR";
    }

    // Place larger number last in the array
    let sumArr = [firstNum, secondNum];
    if (firstNum > secondNum) {
        sumArr.shift();
        sumArr.push(firstNum);
    }
    console.log(sumArr);
    
    // Add numbers within range specified in parameters
    let sum = 0;
    for (let i = 0; i < sumArr[1]; i++) {
        sum += sumArr[0];
        sumArr[0]++;
    }
    return sum;
};

console.log(sumAll(0, 1));

// Do not edit below this line
module.exports = sumAll;
