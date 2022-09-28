// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowLetter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upLetter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numberArr = [1,2,3,4,5,6,7,8,9]
var speChar = ['!','@','#','$','%','&','*','(',')','*','+','-','.','/',':',';','<','=','>','?','[',',','{','|','}','~']
var passArr = []

passLength = prompt("how many charaters do you want your password to be?")
sLowLetter = confirm("do you want lower case letters")
sUpLetter = confirm("do you want Upper case letters")
sNumber = confirm("do you want Numbers")
sSpeChar = confirm("do you want Special Characters")

var passWord = []

if(sLowLetter){
  passArr = passArr.concat(lowLetter)
}
if(sUpLetter){
  passArr = passArr.concat(upLetter)
}
if(sNumber){
  passArr = passArr.concat(numberArr)
}
if(sSpeChar){
  passArr = passArr.concat(speChar)
}
for(i=0 ; i<=passLength ; i++){
var randPlaceHolder = Math.floor(Math.random() * passArr.length)
var passAssign = passArr[randPlaceHolder]
passWord.push(passAssign)
}

let passWordMaster = passWord.join('')
console.log(passWordMaster)
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");




  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
