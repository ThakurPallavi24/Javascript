// Syntax : array.foreach(function(element,index,arr){})
let fruit = ["apple", "mango", "lichi", "grapes", "guava"];

fruit.forEach(function (element, index) {
  console.log(`Index ${index}  Element is : ${element} `);
});

/*The callback function takes three arguments: the current element, the index of the
 current element, and the array itself*/
