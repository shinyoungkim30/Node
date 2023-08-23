const express = require('express')
const { renderLogin, createDomain } = require('../controllers')
const { idLoggedIn, isLoggedIn } = require('../middlewares')

const router = express.Router()

router.get('/', renderLogin)

router.post('/domain', isLoggedIn, createDomain)

module.exports = router