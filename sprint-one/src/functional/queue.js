var Queue = function(){
  var someInstance = {};
  var count = 0;
  var frontCount = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[count] = value;
    count += 1;
  };

  someInstance.dequeue = function(){
    
      var temp = storage[frontCount]
      delete storage[frontCount];
      frontCount += 1;
      // count -= 1; //breaks some ish
      return temp;
  };

  someInstance.size = function(){
    return Math.max(0, (count-frontCount));
  };

  return someInstance;
};
