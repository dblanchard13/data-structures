var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.count = 0;
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
    var temp = this[this.count]
    delete this[this.count]
    return temp;
  }
};

stackMethods.size = function(){
  return this.count;
};
