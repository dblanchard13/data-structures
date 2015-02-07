var HashTable = function(){
  this._limit = 8;
  this._storage =  LimitedArray(this._limit);
  this.seen = {seen: null}; 
};


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
