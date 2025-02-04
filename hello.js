// types
// 1. explicit
// let name1:string="panthee";
// name1=33; // error
// 2. implicit
// let name1="panthee";
// name1=33; // error
// let v: any = true; // remove :any and uncomment v.run... is error
// v = "1"; // no error as it can be "any" type
// // v.runANonExistentMethod(); 
// console.log(Math.round(v)); // no error as it can be "any" type
var arr1 = [];
var arr2 = [];
// tuple
var ourTuple1;
ourTuple1 = [5, false, 'Coding'];
var ourTuple2;
ourTuple2 = [5, false, 'Coding'];
// named tuple
var graph1 = [55.2, 41.3];
// Destructuring Tuple
var graph2 = [55.2, 41.3];
var x = graph2[0], y = graph2[1];
// object
var car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
// Index Signatures
var nameAgeMap = {};
// enums
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections["North"] = "no";
    CardinalDirections["East"] = "Ea";
    CardinalDirections["South"] = "So";
    CardinalDirections["West"] = "We";
})(CardinalDirections || (CardinalDirections = {}));
console.log(CardinalDirections.North);
