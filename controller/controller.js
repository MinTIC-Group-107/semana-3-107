const config = require('../secret/config.js')
const db = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

exports.signin = (req, res) => {
    db.User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (!user) {
            return res.status(404).send('User Not Found.')
        }
        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password)
        if (!passwordIsValid) {
            return res.status(401).send({
                auth: false,
                accessToken: null,
                reason: 'Invalid Password!'
            })
        }

        const token = jwt.sign({
            id: user.id,
            name: user.name,
            email: user.email
        }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
        })

        res.status(200).send({
            accessToken: token,
        })
    }).catch(err => {
        res.status(500).send('Error ->' + err)
    })
}

exports.register = async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10)
    const newUser = await db.User.create(req.body)
    console.log('newUser: ', newUser)
    if (newUser.dataValues.email) {
        return res.status(200).json({
            resultado: 'Registro Exitoso'
        })
    } else {
        return res.status(500).json({
            error: 'Algo salió mal'
        })
    }
}