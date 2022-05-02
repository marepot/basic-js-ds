const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
constructor() {
    this.root = null;
  }
  root() {
    return this.root;
  }

  add(data) {
    var newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return undefined;
      }
      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  has(data) {
    if (!this.root) return false;

    let current = this.root;
    let found = false;
    while (current && !found) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) return false;
    return found;
  }

  find(data) {
    if (!this.root) return false;

    let current = this.root;
    let found = false;
    while (current && !found) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        found = current;
      }
    }

    if (!found) return null;
    return found;
  }

  remove(data) {
   
  }

  min() {
    if (this.left === null) {
      return this;
    }
    let currentNode = this.root;
    while (currentNode.left != null) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() {
    if (this.left === null) {
      return this;
    }
    let currentNode = this.root;
    while (currentNode.right != null) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};
