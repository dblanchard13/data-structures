var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.count = 0;
  newQueue.frontCount = 0;

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this[this.count] = value
  this.count++;
};

queueMethods.dequeue = function () {
  if (this.count) {
    var temp = this[this.frontCount];
    delete this[this.frontCount];
    this.frontCount++;
    return temp;
  }
};

queueMethods.size = function () {
  return Math.max(0, (this.count - this.frontCount) );
};
