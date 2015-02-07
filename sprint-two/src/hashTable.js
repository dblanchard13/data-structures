var HashTable = function(){
  this._limit = 8;
  this._storage =  LimitedArray(this._limit);
  this.seen = {seen: null}; 
};

// var v1 = 'val1'
// var v2 = 'val2'
// k = v1, v = v1
// k = v2, v = v2
// i = 3
// storage[3] = {v1: 'val1', next: null}
//temp = {v1: 'val1', next: null}
//storage[3] = {v2: 'val2', next: {v1: 'val1', next: null}}

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
    if(this._storage[i]){
      var temp = this._storage[i]; 
      this.seen.seen = 5;   
      this._storage[i] = {k: v, next: temp}
    } else {
         this._storage[i] = {k: v, next: null}
      }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this.seen.seen){
    this.seen.seen = null;
    return this._storage[i].next.k;
  } else {
  return this._storage[i].k;
    
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i].k = null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
