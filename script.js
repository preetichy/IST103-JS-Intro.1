alert("Hello World");
// alert("Hello World");
let name = "Sumina"; // string
let age = 20; // integer
let isStudent = true; // boolean
let height = 154; // floating-point number
let hobbies = ["singing", "dancing", "playing cooking"]; // array
let address = {
  street: "123 6283 Cghester St",
  city: "Vancouver",
  zip: "V5W3C2",
}; // object
let job = null; // null
let spouse; // undefined

const SPEED_OF_LIGHT = 299792458; // meters per second

console.log("Person's name is " + name);
console.log("Person's age is " + age);
console.log("Is the person a student? " + (isStudent ? "Yes" : "No"));
console.log("Person's height is " + height + " cm");
console.log("Person's hobbies include: " + hobbies.join(", "));
console.log(
  "Person's address is: " +
    address.street +
    ", " +
    address.city +
    ", " +
    address.zip
);
console.log("Person's job status is " + job);
console.log("Person's spouse status is " + spouse);
console.log("The speed of light is " + SPEED_OF_LIGHT + " meters per second");
