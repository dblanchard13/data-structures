var Queue = function() {
  this.count = 0;
  this.frontCount = 0;

};

Queue.prototype.enqueue = function(value) {
  this[this.count] = value;
  this.count++;
};
Queue.prototype.dequeue = function() {
  var temp = this[this.frontCount];
  delete this[this.frontCount];
  this.frontCount++;
  return temp;
};
Queue.prototype.size = function() {
  return Math.max(0, this.count - this.frontCount);
};