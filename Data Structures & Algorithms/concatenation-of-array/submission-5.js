class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let finalArray = []
        for (const[i,val] of nums.entries()){
            finalArray[i] = finalArray[i + nums.length] = val
        }
        return finalArray
    }
}
