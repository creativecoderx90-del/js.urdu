//conversion
let score=33
console.log(typeof score);
let valueInNumber=Number("33abc")//if we gave property like number then if even we write it in string it's type will remain in number
console.log(typeof(valueInNumber))//we can also check variable type by using this parenthesis method
console.log(valueInNumber)//but it will give output NAN
let value=null//it will give output null
console.log(value)
let val=undefined//it will give output undefined
console.log(val)
//"33"=>it will easily convert into number 33
//"33abc" =>NAN but NAN type is number it's a little bit confusing
//true=>1;false=>0
let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
// Truthy vs Falsy
// When you use Boolean(), JavaScript categorizes values into two groups. This is very useful for logic:

// Value	Converted to Boolean	Category
// 1	true	Truthy
// "" (Empty string)	false	Falsy
// "hitesh"	true	Truthy
// 0	false	Falsy
// null	false	Falsy
// undefined	false	Falsy
// ********************* operation *********************
let va=3;
let negVa=-va;
console.log(negVa);
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);
let str1="hello";
let str2="hitesh";
let str3=str1+str2;
console.log(str3);
console.log(str1+str2);
console.log("1"+2)
console.log(1+"2")
console.log("1"+"2")
console.log("1"+2+2)//here the otput will 122 in string
console.log(1+2+"2")//but here 1+2 will add and become 3 and output will 32
// but we want that for conversion write code in parenthesis like console.log((1)+(2)+(3))
console.log((1)+(2)+(3))
console.log(+true)//did not use this it's bad practice
console.log(+"")// did not use this it's bad practice
let num1,num2,num3 // it looks smart but we did'not use tricky code we use always use simple code
num1=num2=num3=2+2
console.table([num1,num2,num3])
let gameCounter=100
gameCounter++
console.log(gameCounter)
//from mdn prefix and postfix
