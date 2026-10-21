const mongoose = require('mongoose');

// Assuming you already have a schema defined like this:
const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// TASK 1: Extend the schema by adding the 'city' field
personSchema.add({ 
  city: String 
});

const Person = mongoose.model('Person', personSchema);
// TASK 2: Insert values for at least three records
const newPeople = [
  { name: "Sathwika", age: 19, city: "Chennai" },
  { name: "Sushmitha", age: 23, city: "Banglore" },
  { name: "Srujana", age: 18, city: "Hyderabad" }
];

await Person.insertMany(newPeople);
// TASK 2: Add cities to existing records
await Person.updateOne({ name: "Sathwika" }, { city: "Chennai" });
await Person.updateOne({ name: "Sushmitha" }, { city: "Banglore" });
await Person.updateOne({ name: "Srujana" }, { city: "Hyderabad" });
// TASK 3: Query people from a specific city
const peopleInNY = await Person.find({ city: "Chennai" });

console.log("People in Chennai:", peopleInNY);