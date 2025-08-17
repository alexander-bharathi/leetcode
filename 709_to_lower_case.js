/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
    let lower_str = [];
    for (let index = 0; index < s.length; index++) {
        let code = s.charCodeAt(index);
        if (code >= 65 && code <= 90) {
            lower_str.push(String.fromCharCode(code + 32));
        } else {
            lower_str.push(s[index]);
        }
    }
    return lower_str.join("");
};