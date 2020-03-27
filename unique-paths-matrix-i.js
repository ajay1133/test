/*
Problem: https://leetcode.com/problems/unique-paths/
Solution: https://leetcode.com/problems/unique-paths/discuss/553053/Javascript-Emascript-6-Solution-With-Formula

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

Example 1:

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right

Example 2:

Input: m = 7, n = 3
Output: 28
*/

/*
The key idea is to use perumutations in a string, if we take horizontal as 'h' and vertical as 'v', 
and we need to make m 'h' steps & n 'v' steps, the no of possible ways of arrangement is (m+n)!/m!n!.
We use m-1 & n-1 here beacuse we need 1 step to hop from 1 to 2 horizontally in a 2 x 1 matrix and 
similarly we need n-1 steps to hop from 1 to 2 vertically, so m -> m-1 & n->n-1
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    if (m === 0 && n === 0) {
        return 0;
    }
    return parseInt(BigInt(fact(m + n - 2)) / (BigInt(fact(m - 1)) * BigInt(fact(n - 1))));
};

var fact = function (n) {
    if (n <= 1) {
        return 1;
    }
    return BigInt(n) * BigInt(fact(n - 1));
}