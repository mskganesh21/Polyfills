/*POLYFILL IMPLEMENTATION OF MAP FUNCTION FOR ARRAYS IN JAVASCRIPT*/
/*
map takes an array and then it applies our custom logic and returns a 
new array 

the array prototype if it doesn't have the map function then we'll write the polyfill

the 
*/

//so we're checking the array prototype
//has the myMap function if not we'll add it 
if(!Array.prototype.myMap){
  //takes a callback function and an optional this arguement and executes the cb for each element of the array 
  Array.prototype.myMap = function(cb){
    //validate callback
    if(typeof cb !== 'function'){
      throw new Error('callback must be a function');
    }
    
    //return a new array 
    const result = [];
    
    //this callback takes 3 arguements the current element, the index and the array itself 
    for(let i=0;i<this.length;i++){
      result.push(cb(this[i],i,this));
    }
    
    return result;
  }
}

console.log([1,2,3].myMap(x => x*2));


/*map polyfill with optional this arg*/
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function(callback, thisArg) {
    // Validate callback
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }
    
    const result = [];
    
    // Iterate with proper this context
    for (let i = 0; i < this.length; i++) {
      // Use .call() to set 'this' context for callback
      if (this.hasOwnProperty(i)) {  // Handle sparse arrays
        result[i] = callback.call(thisArg, this[i], i, this);
      }
    }
    
    return result;
  };
}

console.log([1,2,3].myMap(x => x*2));
