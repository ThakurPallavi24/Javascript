//In javascript object can contains function which is known as method.

let book = {
  author: "KC Sinha",
  page: 300,
  color: "black",
  learn: function () {
    console.log("Learn Formulas");
  },

  write: function () {
    console.log("Write Formulas");
  },
};

console.log("Proerties of book is : ", book);

book.learn(); //function call()
book.write(); //function call ()
