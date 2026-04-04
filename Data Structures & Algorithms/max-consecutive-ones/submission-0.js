class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
    let maxStreak = 0;
    let currentStreak = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currentStreak++;
            maxStreak = Math.max(maxStreak, currentStreak);
        } else {
            currentStreak = 0;
        }
    }

    return maxStreak;
}
}
