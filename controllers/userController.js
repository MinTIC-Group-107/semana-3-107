const config = require('../secret/config')
const models = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.index = async (req, res, next) => {
  try {
    const users = await models.User.findAll()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).send({
      message: 'Error: ->' + error
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
          message: 'Tus credenciales no coinciden con nuestros registros'
        })
      }
    } else {
      res.status(404).json({
        auth: false,
        accessToken: null,
        message: 'No existe el usuario en nuestros registros'
      })
    }
  } catch (error) {
    res.status(500).send({
      message: 'Error: ' + error
    })
    next(error)
  }
}

exports.register = async (req, res, next) => {
  try {
    const user = await models.User.findOne({
      where: {email: req.body.email}
    })
    if(user) {
      return res.status(400).json({
        message: 'El usuario ya existe'
      })
    } else {
      req.body.password = bcrypt.hashSync(req.body.password, 10)
      const newUser = await models.User.create(req.body)
      console.log('newUser: ', newUser)
      if (newUser.dataValues.email) {
        return res.status(201).json({
          message: 'Registro Exitoso'
        })
      } else {
        return res.status(500).json({
          message: 'Algo salió mal'
        })
      }
    }
  } catch (error) {
    res.status(500).send({
      message: 'Error: ' + error
    })
    next(error)
  }
}
