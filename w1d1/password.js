var args = process.argv[2];
var newString = "";
function obfuscate(string){
  for(var i = 0; i < string.length; i++){
    if(string.charAt(i).toUpperCase() === 'A'){
      newString += "4";
    }else if(string.charAt(i).toUpperCase() === 'E'){
      newString += '3';
    }else if(string.charAt(i).toUpperCase() === 'O'){
      newString += '0';
    }else if(string.charAt(i).toUpperCase() === 'L'){
      newString += '1';
    }else{
      newString += string[i];
    }
  }
  return newString;
}
console.log(obfuscate(args));