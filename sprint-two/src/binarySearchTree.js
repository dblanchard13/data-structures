var BinarySearchTree = function(value){

var newBST = {};
_.extend(newBST, searchMethods);
newBST.right;
newBST.left;
newBST.value = value;

return newBST;

};

var searchMethods = {};

searchMethods.insert = function (value) {
  if (value > this.value) {
    if (this.right) {
      this.right.insert(value);
    } else {
    this.right = BinarySearchTree(value);
  }
  } else {
    if (this.left) {
      this.left.insert(value);
    } else { 
      this.left = BinarySearchTree(value);
    }
  }
};

searchMethods.contains = function (target) {
  if (this.value === target) {
    return true;
  } 

  if (target > this.value) {
    if (this.right) {
       return this.right.contains(target);
    }
  }

  return false;
};

searchMethods.depthFirstLog = function (cb) {
  if (this.value) {
    cb(this.value);
  }

  if (this.left) {
    this.left.depthFirstLog(cb);
  }

  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */







 
