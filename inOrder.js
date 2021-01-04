// Inorder traversal of a binary tree

const inOrder = (root, arr) => {
    if (!root) {
        return arr;
    }
    inOrder(root.left, arr);
    arr.push(root.val);
    inOrder(root.right, arr);
    return arr;
}

const root = {
    val: 4,
    left: {
        val: 2,
        left: { val: 1 },
        right: { val: 3 }
    },
    right: {
        val: 6,
        left: { val: 5 },
        right: { val: 7 }
    }
};
console.log(inOrder(root, []));