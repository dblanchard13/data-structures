var Stack = function(){
  var someInstance = {};
  var count = 0;
  //var topStack;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    //topStack = value;
    storage[count] = value
    count += 1;

  };

  someInstance.pop = function(){
    if(count){
        count -= 1;
        var temp = storage[count];
        delete storage[count];
        return temp;
    } else {
        return count;
    }
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
