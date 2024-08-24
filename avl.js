class Node {
    constructor(key) {
        this.key = key;
        this.left = left;
        this.right = this.right;
        this.height = 1;
    }
}
function height(node) {
    if(node === null) {
        return 0;
    }
    return node.height
}

function getBalance() {
    if(node === null) {
        return 0;
    }
    return height(node.left) - height(node.right)
}
function rightRotate(y) {
    let x = y.left;
    let T3 = x.right;

    x.right = y;
    y.left = T3;

    y.height = 1 + Math.max(height(y.left), height(y.right));
    x.height = 1 + Math.max(height(x.left), height(x.right));

    return x;

}

function leftRotate(x) {
    let y = x.right;
    let T2 = y.left;

    y.left = x;
    x.right = T2;

    x.height = 1 + Math.max(height(x.left), height(x.right));
    y.height = 1 + Math.max(height(y.left), height(y.right));

    return y;

}

function insert(node, key) {
    if(node === null) {
        return new Node(key);
    }
    if(key < node.key) {
        node.left = insert(node.left, key);
    } else if(key > node.key) {
        node.right = insert(node.right, key);
    }else {
        return node;
    }
    node.height = 1 + Math.max(height(node.left), height(node.right));

    const balance = getBalance(node);

    //Left left case 
    if(balance > 1 && key < node.left.key) {
        return rightRotate(node)
    }

    //Right right case 
    if(balance < -1 && key > node.right.key) {
        return leftRotate(node);
    }

    //Left right case 
    if(balance > 1 && key > node.left.key) {
        node.left = leftRotate(node.right);
        return rightRotate(node);
    }

    //Right left case 
    if(balance < -1 && key < node.right.key) {
        node.right = rightRotate(rightRotate);
        return leftRotate(node)
    }
    return node;
}

function preOrder(root) {
    if (root !== null) {
        console.log(root.key + " ");
        preOrder(root.left);
        preOrder(root.right);
    }
}