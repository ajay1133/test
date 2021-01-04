// Go from 0 to N, on ith step you exactly move i steps left or right

var pathsFromStartToEnd = function (start, end, path, stepNum) {
    if (end <= start || start < 0) {
        if (end === start) {
            ++pathsCount;
        }
        return false;
    }
    path.left = { start: start + stepNum };
    path.right = { start: start - stepNum };
    pathsFromStartToEnd(start + stepNum, end, path.left, stepNum + 1);
    pathsFromStartToEnd(start - stepNum, end, path.right, stepNum + 1);
};

let
    path = { start: 0 },
    pathsCount = 0;
pathsFromStartToEnd(0, 9, path, 1);
console.log(pathsCount);    