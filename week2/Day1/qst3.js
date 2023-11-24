let bike = {
  model: "Royal Enfield 365",
  color: "Black",
  cost: 200000,
};

console.log(bike.model); //Dotnotation = Syntax: objectName.propertyName

console.log(bike["model"]); //Bracket notation = Syntax: objectName["propertyName"]

//To change the value of a property, use the assignment operator.
bike.color = "Red";

console.log(bike);

delete bike.cost; //to delete any property use delete.

console.log("cost" in bike); //to check the property use in and it will return true or false.
