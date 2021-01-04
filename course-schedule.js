/*
Problem: https://leetcode.com/problems/course-schedule/
Solution: https://leetcode.com/problems/course-schedule/discuss/537869/Javascript-EMAScript-6-DFS-Solution

There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0. So it is possible.

Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.
*/

/*
Basically the idea is to find the cycle in a graph, therefore we first construct a graph, 
a graph would be nothing but an array of dependencies.So graph[4] = [2, 3] 
would mean course 4 is dependent on courses 2 & 3. 

Next we initialize our visited array, which would keep track of what is the status of each item that is visited, 
1 would mean it is still unsure or you can say processing, 2 would mean we already vsiisted it before and no cycle 
was detected.

After all initializations we just call hasCycle function recursively.We take each item in our prerequisites array, 
visit it(initially mark it to 1), if we are able to process all its depenedencies that has no cycle we mark the entry 
with visited status = 2, and return false, if we detect a cycle somehwere we break away by returning true in our 
hasCycle function which actually means yes our graph has a cycle.

Our hasCycle function takes in 3 arguments, graph, an array of arrays[][], visited, an array[], i, type number
graph is our global variable and so is visited, this way we can use its information we processed earlier, 
i is the way of telling the graph know which item to process presently, we return false if i was already processed 
and had no cycle, we return true if i was already processed and had a cycle, if none of the conditions are true we 
simply process it.by marking it as 1 and calling hasCycle recursively on its dependencies or children whatever you 
feel comfortable with.
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  if (numCourses === 0) {
    return true;
  }
  if (!prerequisites.length) {
    return true;
  }
  // generate graph
  let graph = [];
  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }
  for (let i = 0; i < prerequisites.length; i++) {
    const
      c1 = prerequisites[i][0],
      c2 = prerequisites[i][1];
    if (!c1 in graph || !c2 in graph) {
      return false;
    }
    graph[c1].push(c2);
  }
  // return if graph has cycle
  let visited = [];
  for (let i = 0; i < prerequisites.length; i++) {
    if (hasCycle(graph, visited, prerequisites[i][0])) {
      return false;
    }
  }
  return true;
};

var hasCycle = function (graph, visited, i) {
  if (visited[i] === 2) {
    return false;
  }
  if (visited[i] === 1) {
    return true;
  }
  visited[i] = 1;
  for (let j = 0; j < graph[i].length; j++) {
    if (hasCycle(graph, visited, graph[i][j])) {
      return true;
    }
  }
  visited[i] = 2;
  return false;
};