const express = require("express")
const user = express.Router()
const Administrateur= require("../models/Administrateur")



user.get('/', (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
  });



user.put('/:id', (req, res)=>{
      Administrateur.findByIdAndUpdate(req.params.id, {
        familyname : req.body.newfamilyname, firstname : req.body.newfirstname, email : req.body.newemail, password : req.body.newpassword
      }).then((result)=>{
          res.send(JSON.stringify(result))
      })
      .catch((error)=>{ result.status(400).json({ error })})
  })

  
module.exports = user