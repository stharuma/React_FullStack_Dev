const express = require('express');
const router = express.Router();
//Item model
const Item =require('../../model/Item');// outside of api and outside of routers

// @route  GET api/items
//@desc  Get all items
// @access public

router.get('/', (req, res)=> {
 Item.find()
     .sort({date:-1})
     .then(items => res.json(items));// return promise object
});

// @route  Post api/items
//@desc  Create a Post
// @access public

router.post('/', (req, res)=> {
 const newItem = new Item({
   name:req.body.name
 });

newItem.save().then(item=> res.json(item));
});

// @route  Delete api/items
//@desc  Delete a Item
// @access public

router.delete('/:id', (req, res)=> {
 Item.findById(req.params.id)
 .then(item => item.remove().then(()=>res.json({success:true})))
 .catch(err=>res.status(404).json({success:false}));
});

module.exports = router;
