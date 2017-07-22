function getEvenElementsAtProperty(obj, key) {
    var arr = [];

    if ((typeof obj[key] != "undefined") && Array.isArray(obj[key]) && obj[key].length > 0) {
        for (var elem in obj[key]) {
            if (obj[key][elem] % 2 === 0) {
                arr.push(obj[key][elem]);
            }
        }
    }

    return arr;
}


const  getEvenElementAtProperty(obj, key)  => {
  // your code here
   if((typeof obj[key] !== 'undefined') && Array.isArray(obj[key]) && obj[key].length > 0) {
    var evenWord = obj[key].filter((elem) => {
      return elem % 2 === 0;
    });
      return evenWord;
   } else {
    return [];
  }
}


var obj = {
    key: [1000, 11, 50, 17]
};

var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
