var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //if list.tail = null (empty) then this.tail and this.head point to same
    if(list.tail === null) {
      this.tail = Node(value);
      this.head = Node(value);
    } else {
      var temp = this.tail;
      this.tail = Node(value);
      this.head.next = this.tail;
    }  
  };

  list.removeHead = function(){
    var temp = this.head;

    delete this.head;
    
    this.head = temp.next;
    
    return temp.value;
  };

  list.contains = function(target){
    for(var key in list){
      if(list[key].value === target){
        return true;
      } 
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {
    value: value,
    next: null
  };

  //node.value = value;
  //node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
