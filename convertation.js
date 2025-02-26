
//convert_to_binary-the function of converting numbers from decimal to binary
function convert_to_binary(num){
 const result=[];
  while(num>=1)
{
 result.push(num%2);
 num=Math.floor(num/2)
}
  return result.reverse().join("")
}
console.log(convert_to_binary(12))

//convert_to_number-the function of converting numbers from binary to decimal
function convert_to_number(bin){
 const digits = Array.from(bin.toString(), Number);
 let res=0;
  for(let i=0;i<digits.length;i++)
   res+=digits[i]*2**(digits.length-1-i);
 return res
}
console.log(convert_to_number(1110000111))

//convertstion-a function that uses a regular expression to determine in which system a number is written, and outputs its representation in another system.
function convertation(n){
   let res=0; 
   let res2=[]
if(/^[01]+$/.test(n.toString()))
{
    const digits = Array.from(n.toString(), Number);
     for(let i=0;i<digits.length;i++)
      res+=digits[i]*2**(digits.length-1-i);
}
else{
    while(n>=1)
        {
         res2.push(n%2);
         n=Math.floor(n/2)
        }
        res=res2.reverse().join("")
}
return res
}
module.exports = convertation;
console.log(convertation(12))
