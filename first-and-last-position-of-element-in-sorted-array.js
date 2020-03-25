/*
Problem: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
Solution: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/discuss/541542/Javascript-EMAScript-6-Solution

Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
*/

/*
The idea is to binarySearch array.
If we find midTerm's value === target we again call the function recursively
If we find - 1 as response we return the midTerm else we return the response.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    if (!nums.length) {
        return [-1, -1];
    }
    const low = binarySearch(nums, target, 0, nums.length - 1, true);
    if (low === nums.length - 1) {
        return [low, low];
    }
    let high = binarySearch(nums, target, low + 1, nums.length - 1);
    if (high === -1) {
        high = low;
    }
    return [low, high];
};

var binarySearch = function (arr, ele, low, high, findLow = false) {
    console.log(low, high, findLow);
    if (high === low) {
        return arr[low] === ele ? low : -1;
    }
    if (high - low === 1) {
        const idxPrim = findLow ? low : high,
            idxSec = findLow ? high : low;
        return arr[idxPrim] === ele ? idxPrim : (arr[idxSec] === ele ? idxSec : -1);
    }
    const mid = parseInt((high + low) / 2);
    if (ele < arr[mid]) {
        return binarySearch(arr, ele, low, mid - 1, findLow);
    } else if (ele > arr[mid]) {
        return binarySearch(arr, ele, mid + 1, high, findLow);
    }
    let newPoint = -1;
    if (findLow) {
        newPoint = binarySearch(arr, ele, low, mid - 1, true);
    } else {
        newPoint = binarySearch(arr, ele, mid + 1, high, false);
    }
    if (newPoint === -1) {
        return mid;
    }
    return newPoint;
};