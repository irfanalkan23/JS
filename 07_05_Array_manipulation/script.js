// JavaScript code​​​​​​‌​‌‌‌‌‌​​​‌​​‌‌​​​​‌​‌‌‌‌ below
// Write your answer here, then test your code.

// Change these boolean values to control whether you see 
// the expected answer and/or hints
const showExpectedResult = false;
const showHints = false;

const deskArray = [
    "pen",
    "camera",
    "phone",
    "notebook",
    "headphones",
    "laptop",
    "light bulb",
    "USB drive",
    "elephant"
];

const processArray = deskArray => {

    let newDeskArr = [...deskArray];

    // Your code goes here

    //remove the last item from the array
    newDeskArr.pop();

    //sort the remaining array items alphabetically
    newDeskArr.sort();

    //move the last item to the first position
    newDeskArr.unshift(newDeskArr.pop());

    //Find the "USB drive" item in the array and move it to the last position
    let usbIndex = newDeskArr.indexOf("USB drive");
    newDeskArr.push(newDeskArr.splice(usbIndex, 1));


    //find the "laptop" item in the array and remove it
    let laptopIndex = newDeskArr.indexOf("laptop");
    newDeskArr.splice(laptopIndex, 1);

    // Your code ends here

    return newDeskArr;
};


// This is how your code will be called.
// Your answer should be the largest value in the numbers array.
// You can edit this code to try different testing cases.
const result = processArray(deskArray);
console.log(result);

