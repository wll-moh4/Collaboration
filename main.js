const name = [
  {
    first: "Moha",
    last: "Cade",
    age: 20,
    hobbies: ["reading", "gaming", "Coding"],
    isStudent: true,
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    },
    greet: function () {
      console.log(`Hello, my name is ${this.first} ${this.last}.`);
    },
  },
];
console.log(name.first); // Output: Moha
console.log(name.last); // Output: Cade
console.log(name.age); // Output: 20
console.log(name.hobbies); // Output: ["reading", "gaming", "Coding"]
console.log(name.isStudent); // Output: true
console.log(name.address); // Output: { street: "123 Main St", city: "Anytown", state: "CA", zip: "12345" }
name.greet(); // Output: Hello, my name is Moha Cade.
console.log(name.hobbies[0]); // Output: reading
console.log(name.address.city); // Output: Anytown
console.log(name.address["state"]); // Output: CA
