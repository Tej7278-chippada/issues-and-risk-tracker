var express = require('express');

var riskList = [
    { "id": 1, "name": "Diwakar", "status": "open", "desc": "proxy issue", "stdt": "2023-06-30", "cldt": "2023-07-12", "reason": "User details not given"},
    { "id": 2, "name": "Teja", "status": "open", "desc": "server issue", "stdt": "2023-06-27", "cldt": "2023-07-20", "reason": "User details not given"},
    { "id": 3, "name": "Surya", "status": "open", "desc": "proxy issue", "stdt": "2023-06-20", "cldt": "2023-07-13", "reason": "User details not given" },

    // {  "id":  4,  "name":  "Ajax Programming", "status": "open"  },
    // {  "id":  5,  "name":  "jQuery", "status": "open"  },
    // {  "id":  6,  "name":  "Mastering Node.js", "status": "open"  },
    // {  "id":  7,  "name":  "Angular JS 1.x", "status": "open"  },
    // {  "id":  8,  "name":  "ng-book 2", "status": "open"  },
    // {  "id":  9,  "name":  "Backbone JS", "status": "open"  },
    // {  "id":  10,  "name":  "Yeoman", "status": "open"  }
    ]


var router = express.Router();
var path = require('path');

router.get('/', function (req, res, next) {
    console.log("hi")
})

//API : http://localhost:3021/addRisk
router.post('/addRisk', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With, remember-me");
    var body = req.body;

    riskList.push(body)
    res.json(body);
});

//API : http://localhost:3021/riskList/:id
router.delete('/riskList/:id', function (req, res) {
    var id = req.params.id
    var index = riskList.findIndex(risk => risk.id == id)
    riskList.splice(index, 1);
    res.json(riskList);
});


//API : http://localhost:3021/riskList
router.get('/riskList', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(riskList);
});

//API : http://localhost:3021/updateRis
router.put('/updateRis', function (req, res) {   
    var obj = riskList.findIndex(risk => risk.id == req.body.id)
    riskList[obj] = req.body
    res.json(riskList);
});


module.exports = router;