const removeFromArray = function(origArr, ...args) {
    // Capture all values to be searched and/or removed in an array
    let values = [];
    args.forEach(arg => {
        values.push(arg)
    });

    // Check if values exsit in original array. If true, remove them from origArr
    let index = 0;
    for (let i = 0; i < values.length; i++) {
        if (origArr.includes(values[i])) {
            index = origArr.indexOf(values[i]);    
            origArr.splice(index, 1);
        }
    }
    return origArr;
};

/*
Refactor: The forEach function is a loop that you can fit the if statement in. 
*/

// Do not edit below this line
module.exports = removeFromArray;
