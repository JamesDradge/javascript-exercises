const removeFromArray = function(...args) {
    // for (i = 0; i < array.length; i++){
    //     if (array[i] != args.includes(i)){
    //         newArray.push(array[i]);
    //     } 
    // }
    // return newArray;
    const array = args[0];
    const newArray = [];

    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
