var Stack = function(){
  var someInstance = {};
  var count = 0;
  //var topStack;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    //topStack = value;
    someInstance[count] = value
    count += 1;

  };

  someInstance.pop = function(){
    if(someInstance[count]){
      return count;
    } else {
        count -= 1;
        return someInstance[count];
    }
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
