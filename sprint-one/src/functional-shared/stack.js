var Stack = function() {
  var newStack = {};
  newStack.count = 0;
  _.extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value){
  this[this.count] = value;
  this.count += 1;
};

stackMethods.pop = function(){
  if(this.count){
    this.count -= 1;
    var temp = this[this.count];
    delete this[this.count];
    return temp;
  };
};

stackMethods.size = function(){
  return this.count;
};





