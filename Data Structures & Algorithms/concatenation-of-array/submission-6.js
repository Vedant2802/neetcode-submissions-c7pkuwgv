class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
   getConcatenation(nums) {
    const n = nums.length;
    const finalArray = new Array(2 * n);

    for (const [i, val] of nums.entries()) {
        finalArray[i] = val;
        finalArray[i + n] = val;
    }

    return finalArray;
}
}
