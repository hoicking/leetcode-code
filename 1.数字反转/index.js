function reverse(num){

   const result = Math.abs(num).toString().split("").reverse().join("")

   if(num >0){
       return result > Math.pow(2,31)?0: result
   }else{
       return result < Math.pow(-2,31)?0: -result
   }
}


console.log(reverse(-2003))