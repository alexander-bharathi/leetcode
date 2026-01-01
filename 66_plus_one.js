var plusOne = function (digits) {
    let id = digits.length - 1;
    while (id >= 0 && digits[id] === 9) {
        digits[id] = 0;
        id--;
    }
    if (id < 0) {
        digits.unshift(1);
    } else {
        digits[id]++;
    }
    return digits;
};