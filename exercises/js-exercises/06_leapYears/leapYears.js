const leapYears = function(year) {
    // Check divisibility with 100 and 400 to determine if leap year
    if (year % 100 === 0 && year % 400 != 0) {
        return false;
    }
    // Return true or false depending on divisibility with 4
    return year % 4 === 0 ? true:false;

    // Refactor: Can remove "? true:false" and it will still return true/false
};

// Do not edit below this line
module.exports = leapYears;
