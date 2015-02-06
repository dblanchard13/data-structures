var Stack = function() {
  this.count = 0;  

};

// var newStack = new Stack();


Stack.prototype.push = function(value){
  this[this.count] = value;
  this.count += 1;
}

Stack.prototype.pop = function(){
  if(this.count){
    this.count -= 1;
    var temp = this[this.count];
    delete this[this.count]
    return temp;
  }
}

Stack.prototype.size = function(){
  return this.count;
}
