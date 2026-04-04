class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        final_array = 2*nums
        length_nums = len(nums)
        for i in range(len(nums)):
            final_array[i] = nums[i]
            final_array[i+length_nums] = nums[i]
        return final_array

        