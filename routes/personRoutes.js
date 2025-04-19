const express =require('express');
const router = express.Router();
const Person = require('../models/model');

// POST method request to the Person Database
router.post('/', async (req,res)=>{
    try {
        const data = req.body; // Assuming you're sending JSON data in the request body
        console.log(data);
        
        // create a new person document using the mongoose model
        const person = new Person(data);
        // save the person document to the database

        const response = await person.save('person');
        console.log("data saved successfully");
        res.status(200).json({response});
        
    } catch (error) {
        console.log("error in saving data", error);
        res.status(500).json({ message: 'Error creating person', error });
        
        
    } 
})
// GET method request to the Person Database
router.get('/', async (req, res) => {
    try {
        const persons = await Person.find();
        res.status(200).json(persons);
    } catch (error) {
        console.error('Error fetching persons:', error);
        res.status(500).json({ message: 'Error fetching persons', error });
    }
});
// GET parameter request to the MenuItem Database
router.get('/:worktype',async (req,res)=>{
    try {
        const worktype = req.params.worktype;
        if(worktype === 'chef' || worktype === 'waiter' || worktype === 'manager'|| worktype === 'cashier'){
            const persons = await Person.find({work:worktype});
        res.status(200).json(persons);
        
        }
    } catch (error) {
        console.log("error in fetching data", error);
        res.status(500).json({ message: 'Error fetching persons', error });
    }
    
})
// PUT method request to the Person Database
router.put('/:id', async (req,res)=>{
    try {
        const personId = req.params.id // Get the ID from the request parameters
        const updatedData = req.body // Get the updated data from the request body
        const dataResponse = await Person.findByIdAndUpdate(personId,updatedData,{
            new:true, // This option returns the updated document
            runValidators:true, // This option ensures that the updated data is validated against the mongoose schema
            
        })
        console.log("data updated successfully",dataResponse);
        res.status(200).json({dataResponse});

        if(!dataResponse){
            return res.status(404).json({message:"person not found"})
        } 
    } catch (error) {
        console.log("error in updating data", error);
        res.status(500).json({ message: 'Error updating person', error });
        
    }
})
// DELETE method request to the Person Database
router.delete('/:id', async (req,res)=>{
    try {
        const personId = req.params.id // Get the ID from the request parameters
        // Asuming you have a mongoose model named Person
        const dataResponse = await Person.findByIdAndDelete(personId)

        if(!dataResponse){
            return res.status(404).json({message:"person not found"})
        } 
        console.log(dataResponse,"data deleted successfully");
        res.status(200).json({dataResponse});
    } catch (error) {
        console.log("error in deleting data", error);
        res.status(500).json({ message: 'Error deleting person', error });
        
    }
})


// export the router
module.exports = router;