class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let n = nums.length
        let start = 0
        let end = n - 1

        while(start <= end){
            let mid = Math.floor((start + end) / 2)
            if(target > nums[mid]){
                start = mid + 1
            }
            else if(target < nums[mid]){
                end = mid - 1
            }

            else {
                return mid
            }
        }
        return -1
    }
}
