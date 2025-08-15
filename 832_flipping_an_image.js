/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    for (row of image) {
        let left = 0, right = row.length - 1;
        while (left <= right) {
            [row[left], row[right]] = [row[right] ^ 1, row[left] ^ 1];
            left++;
            right--;
        }
    }
    return image;
};


// /**
//  * @param {number[][]} image
//  * @return {number[][]}
//  */
// var flipAndInvertImage = function (image) {
//     for (let i = 0; i < image.length; i++) {
//         image[i] = image[i].reverse();
//         for (let j = 0; j < image[i].length; j++) {
//             image[i][j] = image[i][j] == 0 ? 1 : 0;
//         }
//     }
//     return image;
// };