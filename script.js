var recursive = function(a){
  if(a===0){
    return 1;
  }
  a = a * recursive(a-1);
  return a;
};

var conditionalAdd = function(b){
  if(b<5){
    return b+5;
  } else {
    return b+1;
  }
};

var moduThree = function(c){
  return c%3;
};


console.log(moduThree(conditionalAdd(recursive(12))));
