var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this[item] = item;
};

setPrototype.contains = function(item){
  for(var key in this){
    if(this[key] === item){
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item){
  for(var key in this){
    if(this[key] === item){
      delete this[key];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
