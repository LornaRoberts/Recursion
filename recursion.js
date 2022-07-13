function isEven (N){
if (N === 1){
    console.log(false);
}else if (N === 0){
    console.log(true);
}else{
   return isEven(N-2);
}

}

isEven(75);