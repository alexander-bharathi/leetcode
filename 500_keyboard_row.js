/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const row1 = new Set("qwertyuiop");
    const row2 = new Set("asdfghjkl");
    const row3 = new Set("zxcvbnm");
    const isValid = (word) => {
        let lower = word.toLowerCase();
        let row;
        if (row1.has(lower[0])) row = row1;
        else if (row2.has(lower[0])) row = row2;
        else row = row3;

        for (let ch of lower) {
            if (!row.has(ch)) return false;
        }
        return true;
    };
    return words.filter(isValid);
};
