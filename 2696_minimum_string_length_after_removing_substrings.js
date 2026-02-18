var minLength = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        if (stack.length > 0 &&
            ((stack[stack.length - 1] === 'A' && ch === 'B') ||
                (stack[stack.length - 1] === 'C' && ch === 'D'))) {
            stack.pop();
        } else {
            stack.push(ch);
        }
    }
    return stack.length;
};
