// Callbacks

// Complete this function so that it passes the numbers 1 and 2 into the callback
function two_numbers(callback){
    // TODO
    callback(1 , 2)
  }
  
  two_numbers(function(x, y){
    console.log(x, y);
  })
  
   // Async and callbacks
  
  // Complete this function using setTimeout to only pass the message to the callback
  // after the defined delay
  function afterTimeout(message, delay, callback) {
    // TODO
  }
  
afterTimeout("hello world", 1000, function(message){
    console.log(message);
  })

