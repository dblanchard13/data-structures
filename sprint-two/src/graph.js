

var Graph = function(){
};

Graph.prototype.addNode = function(node){
  this[node] = {node: node};
  this[node].edge = false;
};

Graph.prototype.contains = function(node){
  for (var key in this) {
    for(var keys in this[key]){
      if(this[key][keys] === node){
        return true;
      }
    }
  } 
  return false;
};

Graph.prototype.removeNode = function(node){
  for (var key in this) {
    for(var keys in this[key]){
      if(this[key][keys] === node){
        delete this[key][keys]
      }
    }
  } 
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return this[fromNode].edge && this[toNode].edge;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this[fromNode].edge = true;
  this[toNode].edge = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
  for (var key in this) {
    if(this[key].node){
      cb(this[key].node);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



