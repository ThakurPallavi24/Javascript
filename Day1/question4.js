/* Scope:It refers to the accessibility and visibility of variables, 
functions, and objects within a 
 specific part of your code during runtime
 */

var globalVariable = "Hello"; //It is a global scope.
//Variables, functions, and objects declared outside any function or block have global scope.
console.log(globalVariable);

function demo() {
  var a = "cake"; //Variables, functions, and objects declared within a specific function have function scope.

  const p = 100; //Variables declared using 'let' and 'const' keywords have block scope.

  if (p == 100) {
    console.log("century");
  } else {
    console.log("not a century");
  }
  console.log(a);
}
demo();
