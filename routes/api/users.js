const User = require("../../db").User
const route = require('express').Router()

route.get("/",(req,res)=>{
    // send data for all users
    console.log("reached here")

    User.findAll()
    .then((users)=>{
        res.status(200).send(users)

    }).catch((err)=>{
        res.status(500).send({
            error: "Could not retrieve users"
        })

    })
    
})

route.post("/",(req,res)=>{
    // we expect req to have name in it.
    User.create({
        name: req.body.name
    }).then((user)=>{
        res.status(201).send(user)
    }).catch((err)=>{
        res.status(501).send({
            error: "Could not add new users"
        })

    })
})

exports = module.exports = route