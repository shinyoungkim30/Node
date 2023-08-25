const express = require('express')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const { 
    renderMain, renderRoom, createRoom, enterRoom, removeRoom, sendChat, 
} = require('../controllers')

const router = express.Router()

router.get('/', renderMain)

router.get('/room', renderRoom)

router.post('/room', createRoom)

router.get('/room/:id', enterRoom)

router.delete('/room/:id', removeRoom)

router.post('/room/:id/chat', sendChat)

try {
    
} catch (err) {
    console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
}

module.exports = router