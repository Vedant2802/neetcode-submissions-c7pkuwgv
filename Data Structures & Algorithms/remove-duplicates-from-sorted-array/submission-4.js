class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
     removeDuplicates(nums) {
        const unique_set = new Set(nums);
        const new_list = Array.from(unique_set);

        for (let i = 0; i < new_list.length; i++) {
            nums[i] = new_list[i];
        }

        return new_list.length; 
    }
}
