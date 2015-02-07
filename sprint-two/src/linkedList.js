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
      var oldTail = this.tail;
      this.tail = Node(value);
      this.tail.previous = oldTail;
      this.head.next = this.tail;
    }  
  };

  list.removeTail = function(){
    // check if tail exists
    if(this.tail){  
      var oldTail = this.tail;
      delete this.tail
      this.tail = oldTail.previous;
      this.tail.next = null;

      return oldTail.value;
    }
  
  };

  list.addToHead = function(value){

    if(list.head === null) {
      this.tail = Node(value);
      this.head = Node(value);
    } else {
      //old .head needs to point to current Node
      var oldHead = this.head;
      this.head = Node(value);
      oldHead.previous = this.head;
      this.head.next = oldHead;
      // current Node(value).next needs to point to old .head
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
    next: null,
    previous: null
  };

  //node.value = value;
  //node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

