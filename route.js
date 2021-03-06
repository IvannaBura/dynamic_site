const express = require('express')
const router = express.Router() 
router.use('/public', express.static('public')) 
router.get('/public', function(req, res) {
   
    res.sendFile(__dirname + '/public/main_blackberry.html') 
})
router.get('/public/page_1_blackberry', function(req, res) {
    res.sendFile(__dirname + '/public/page_1_blackberry.html')
})
router.get('/public/page_2_blackberry', function(req, res) {
    res.sendFile(__dirname + '/public/page_2_blackberry.html')
})
router.get('/public/page_3_blackberry', function(req, res) {
    res.sendFile(__dirname + '/public/page_3_blackberry.html')
})
router.get('/public/page_4_blackberry', function(req, res) {
    res.sendFile(__dirname + '/public/page_4_blackberry.html')
})

module.exports = router 