function palindrome(inputString) {
    let inputArr = inputString.split('');
    let reverseArr = [];
    for (let i = inputArr.length-1; i > 0; i--) {
        reverseArr.push(inputArr[i]);
    }
    let reverseStr = reverseArr.join("");
    if (inputString === reverseStr) {
        return true;
    } else {
        return false;
    }
    }
