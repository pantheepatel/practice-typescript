type Mapish = { [k: string]: boolean };
type M = keyof Mapish;

let obj = { name: 'panthee' }
console.log(obj[0]);
console.log(obj["0"]);
console.log(obj["name"]);