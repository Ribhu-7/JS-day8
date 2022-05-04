//map , filter, reduce

let numbers = [2,3,4,5,6,7];
console.log(numbers);
numbers.map((item)=>{console.log(item)});
let res= numbers.filter((item)=> {return item>3});
console.log(res);

let res1= numbers.reduce((acc,cur)=> acc=acc+cur,0);
console.log(res1);
let res2= numbers.reduce((acc,cur)=> acc=acc*cur,1);
console.log(res2);

let str ="Lakhwinder Singh";
console.log(str.length);
console.log(str.charAt(2));


console.log(str.endsWith("g"));


let sentence = "Hello World";
console.log(sentence.includes("world"));


console.log(sentence.indexOf("o"));
console.log(sentence.lastIndexOf("o"));


console.log(str.length);

console.log(str.replace("Lakhwinder", "Lucky"));

console.log(str.search("Lakhwinder"));
console.log(str.search("Singh"));

console.log(sentence.substr(1,4));

console.log(sentence.substring(0,7));
console.log(sentence.substring(7,0));

let email = "sidhant.gupta@prepbytes.com";

let values = email.split("@");
console.log(values);