const children = [
    { name: "Anna", age: 12 },
    { name: "Peter", age: 15 },
    { name: "Emma", age: 10 },
];
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    address: {
        street: "123 Main St",
        city: "Springfield",
        state: "IL",
        zip: "62701"
    },
    children: children,
};

// console.log(children)
// console.log(children[1])
// console.log(children[1].name)

console.log(person);
// console.log(person.address);
// console.log(person.address.city);
// console.log(person.children);
// console.log(person.children[0]);
// console.log(person.children[0].name);
// console.log(person.children[0].age);


