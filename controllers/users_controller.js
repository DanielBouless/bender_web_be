const router = require('express').Router()
const db = require('../models')
const{ User } = db
const bcrypt = require('bcrypt')



router.post('/', async(req, res)=> {
        let { password, ...rest } = req.body
        const user = await User.create({
            ...rest, passwordDigest: await bcrypt.hash(password,10)
        })
        res.sendStatus(201);
    }
    )


router.get('/', async(req,res)=>{
    const users = await User.findAll()
    res.status(200).json(users)
})

module.exports = router