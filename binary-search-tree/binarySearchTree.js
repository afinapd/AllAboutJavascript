
class Node {
    constructor(input) {
        this.input = input;
        this.left = null;
        this.right = null;
    }
}

class binarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(input) {
        var newNode = new Node(input)
        if (this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }
    insertNode(node, newNode) {
        if (newNode.input < node.input) {
            if (node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        }
        else {
            if (node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }
}
let BSTtest = new binarySearchTree();
//tests
// BSTtest.insert(10);
// BSTtest.insert(7);
// BSTtest.insert(14);
// BSTtest.insert(2);
// BSTtest.insert(4);
// let hasilBinary = JSON.stringify(BSTtest, null, 4)
// console.log(hasilBinary);
// versi looping
let arrays = [2, 3, 4, 5, 6]
for (i of arrays) {
    BSTtest.insert(i);
}
let hasilBinary = JSON.stringify(BSTtest, null, 4)
console.log(hasilBinary);

