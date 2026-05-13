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
