function atzeret (num){
 if(num === 0 || num === 1){
   return 1;
 } 
 var res = 1;
 var shlili = false;
 if(num < 0){
   shlili = true;
   num = Math.abs(num);
 }
 while(num > 0){
   res = res * num;
   num--;
 }
 if(shlili){
   return -res;
 }
 return res;
}
atzeret (-10);
