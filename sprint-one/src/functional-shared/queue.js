var Queue = function(){
  var newQueue = {};
  newQueue.count = 0;
  newQueue.frontCount = 0;
  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this[this.count] = value;
  this.count += 1;
};

queueMethods.dequeue = function(){
  if(this.count){
    var temp = this[this.frontCount];
    delete this[this.frontCount];
    this.frontCount += 1;
    return temp;
  };
};

queueMethods.size = function(){
  return Math.max(0, (this.count - this.frontCount) );
};

