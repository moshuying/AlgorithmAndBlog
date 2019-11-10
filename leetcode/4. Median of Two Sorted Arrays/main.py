class Solution:
    def findMedianSortedArrays(self, nums1: list, nums2: list) -> float:
        len1, len2 = len(nums1), len(nums2)
        sam = {}
        c = 1
        cur1, cur2 = 0, 0
        len1, len2 = len(nums1), len(nums2)
        all_len = len1 + len2
        nums1.append(9999999)
        nums2.append(9999999)
        for i in range(int(all_len/2)+1):
            if   nums1[cur1] <= nums2[cur2]:
                sam[c] = nums1[cur1]
                c += 1
                cur1 += 1
            else:
                sam[c] = nums2[cur2]
                c += 1
                cur2 += 1
        if all_len%2:
            return float(sam.get(c-1)if sam.get(c-1) !=None else 0 )
        else:
            return float((sam.get(c-1)if sam.get(c-1) !=None else 0 )+
                         (sam.get(c-2)if sam.get(c-2) !=None else 0 ))/2
if __name__ == "__main__":
    s = Solution()
    n1 = [1,2,3,4,5]
    n2 = [2,3,4,5,6]
    res=s.findMedianSortedArrays(n1,n2)
    print(res)