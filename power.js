function power (x,y){
  if(x === 0){
    return 0;
  }
  if(y === 0){
    return 1;
  }
  if(y === 1){
    return x;
  }
  var neg = false;
  if(y<0){
   neg = true;
   y = Math.abs(y);
  }
  var i=0;
  var res = 1;
  while(i<y){
    res = res*x;
    i++;
  }
  if(neg){
    res = 1/res;
  }
  return res;
}
power (3,-4)
