var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  newTree.children = [];  

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  var flag = false;

  if (this.value === target){ flag = true };

  for(var i = 0; i < this.children.length; i++) {
   if(this.children[i].contains(target)){
    return true;
    }        
  };
   
  return flag;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
