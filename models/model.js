// Import mongoose
const mongoose = require('mongoose');


const personSchema = new mongoose.Schema({
   name:{type: String, required: true},
    age:{type: Number, required: true},
    work:{type: String, required: true, enum:['chef','waiter','manager','cashier']},
    mobile:{type: String, required: true},
    email:{type: String, required: true, uniq:true},
    address:{type: String},
    salary:{type: Number, required: true}, 
});
// Create person model
const Person = mongoose.model('Person', personSchema);
// Export the person model

module.exports = Person;