const config = require('../secret/config')
const models = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.index = async (req, res, next) => {
  try {
    const user = await models.User.findAll()
    res.status(200).json(user)
  } catch (error) {
    res.status(500).send({
      message: 'Error: '
    })
    next(error)
  }
}

exports.signin = async (req, res, next) => {
  try {
    const user = await models.User.findOne({
      where: {email: req.body.email}
    })
    if (user) {
      const passwordIsValid = bcrypt.compareSync(req.body.password, user.password)
      if (passwordIsValid) {
        const token = jwt.sign({
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          image: user.image,
          profile: user.profile
        }, config.secret, {
          expiresIn: 86400
        })
        res.status(200).send({
          auth: true,
          accessToken: token,
        })
      } else {
        res.status(401).json({
          auth: false,
          accessToken: null,
          reason: 'Tus credenciales no coinciden con nuestros registros'
        })
      }
    } else {
      res.status(404).json({
        auth: false,
        accessToken: null,
        reason: 'No existe el usuario en nuestros registros'
      })
    }
  } catch (error) {
    res.status(500).send({
      message: 'Error: ' + error
    })
    next(error)
  }
}
