from typing import List

class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        leftCount = 0
        totalCount = sum(nums)
        for i in range(0,len(nums)):
            rightCount = totalCount - leftCount - nums[i]
            if(leftCount == rightCount):
                return i
            leftCount = leftCount + nums[i]
        return -1
       