const express =require('express');
const router = express.Router();
const MenuItem = require('../models/menuItems');

// POST method request to the MenuItem Database
// POST method request to the MenuItem Database
router.post('/', async (req,res)=>{
    try {
        const menuData = req.body; // Assuming you're sending JSON data in the request body
        console.log(menuData);
        // create a new menu item document using the mongoose model
        const menuItem= new MenuItem(menuData);
        // save the menu item document to the database
        const menuCard = await menuItem.save();
        console.log("data saved successfully");
        res.status(200).json({menuCard});
        
    } catch (error) {
        console.log("error in saving data", error);
        res.status(500).json({ message: 'Error creating menu item', error });
        
    }
})
// GET method request to the MenuItem Database
router.get('/', async (req,res)=>{
    try {
        const menuItems = await MenuItem.find();
        res.status(200).json(menuItems);
        console.log(menuItems);
        
    } catch (error) {
        res.status(500).json({ message: 'Error fetching menu items', error });
        console.log("error in fetching data", error);
        
    }
})
// GET parameter request to the MenuItem Database
router.get('/:tastetype', async (req,res)=>{
    try {
        const tasteType = req.params.tastetype;
        if(tasteType=== 'spicy'|| tasteType === 'sweet' || tasteType === 'sour'){
            const menuItems = await MenuItem.find({taste:tasteType});
            res.status(200).json(menuItems);
            console.log(menuItems);
            
        }
    } catch (error) {
        console.log("error in fetching data", error);
        res.status(500).json({ message: 'Error fetching menu tastetype', error });
        
    }
})

// export the router
module.exports = router;