var recoverOrder = function (order, friends) {
    let result = [];
    const friendSet = new Set(friends);
    for (let el of order) {
        if (friendSet.has(el)) {
            result.push(el);
        }
    }
    return result;
};

// Input: order = [3,1,2,5,4], friends = [1,3,4]
// Output: [3,1,4]
// Explanation:
// The finishing order is [3, 1, 2, 5, 4]. Therefore, the finishing order of your friends is [3, 1, 4].