function forLoop(array){
for (var i = 0; i<25; i++){
    if(i === 1){
   
  array.push("I am 1 strange loop.");
    }
    else {
      var b = i
      array.push("I am ${b} strange loops.")
    }
  }
  return array
}



