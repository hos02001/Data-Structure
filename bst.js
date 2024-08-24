const treeify = require('treeify')

class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null; // Corrected spelling of "right"
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    
    insert(data) {
        const newNode = new Node(data);
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while (true) {
            if (data < current.data) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else if (data > current.data) {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            } else {
                // If the data is equal, we can either not insert or insert it in a specific way.
                return this;
            }
        }
    }
}

const tree = new BST();
tree.insert(20);
tree.insert(10);
tree.insert(30);
tree.insert(25);
tree.insert(35);
console.log(treeify.asTree(tree, true));
