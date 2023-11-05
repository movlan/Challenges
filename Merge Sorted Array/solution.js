/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // for (let i = 0; i < n; i++) {
    //     nums1[m + i] = nums2[i];
    // }
    // nums1.sort((a,b)=>a-b)

    // console.log(nums1)

    // better? solution from community
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
            k--;
        } else {
            nums1[k] = nums2[j];
            j--;
            k--;
        }
    }
};

merge([1,2,3,0,0,0], 3,[2,5,6], 3)