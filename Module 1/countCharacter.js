function countCharacter(str, char) {
  if (char) return str.split(char).length - 1;
  return 0;
}

// second way
function countCharacter(str, char) {
  var arrStr = str.split(''),
      countStr = 0;
    for (var i = 0; i < arrStr.length; i++) {
       (arrStr[i] === char) ? countStr++ : undefined;
    }
    return countStr;
}

var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3


