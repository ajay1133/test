/*
Problem: https://leetcode.com/problems/unique-paths-ii/
Solution: https://leetcode.com/problems/unique-paths-ii/discuss/552958/Javascript-Emascript-6-Dynamic-Programming-Solution

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and empty space is marked as 1 and 0 respectively in the grid.

Note: m and n will be at most 100.

Example 1:

Input:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
Output: 2
Explanation:
There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
*/

/*
The main idea is to backtrack the problem, we form our dp array where each entry represents as the count of 
possible paths by which one can reach it. We can only reach an (x, y) point from top (x, y-1) or from left (x-1, y).
We only add consider these two paths if itself the value at that entry is 0 i.e it is not an obstacle.
*/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (!obstacleGrid.length) {
        return 0;
    }
    const dp = [], 
          m = obstacleGrid.length - 1, 
          n = obstacleGrid[0].length - 1;
    if (obstacleGrid[0][0] === 1) {
        return 0;
    }
    dp[0] = [];
    dp[0][0] = 1;
    for (let i = 1; i <= m; i++) {
        dp[i] = [];
        dp[i][0] = obstacleGrid[i][0] === 1 ? 0 : dp[i-1][0];
    }
    for (let j = 1; j <= n; j++) {
        dp[0][j] = obstacleGrid[0][j] === 1 ? 0 : dp[0][j-1];
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i-1][j] + dp[i][j-1];
        }
    }
    console.log(dp);
    return dp[m][n];
};