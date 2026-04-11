# Definition for a pair.
# class Pair:
#     def __init__(self, key: int, value: str):
#         self.key = key
#         self.value = value
# This is a shift solution instead of a swap solution
class Solution:
    def insertionSort(self, pairs: List[Pair]) -> List[List[Pair]]:
        n = len(pairs)
        res = []

        for i in range(n):
            curr = pairs[i]
            j = i - 1

            while j >= 0 and pairs[j].key > curr.key:
                # temp = pairs[i+1]
                pairs[j+1] = pairs[j]
                # pairs[j] = temp
                j -= 1
                pairs[j+1] = curr
            
            res.append(pairs[:])
        return res