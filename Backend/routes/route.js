var express = require('express');

var issueList = [
    { "id": 1, "name": "Teja", "status": "open", "desc": "proxy issue", "stdt": "2024-01-02", "cldt": "2024-01-30"},
    { "id": 2, "name": "Diwakar", "status": "closed", "desc": "server issue", "stdt": "2024-01-10", "cldt": "2024-01-20"},
    { "id": 3, "name": "Pravalika", "status": "closed", "desc": "proxy issue", "stdt": "2024-01-03", "cldt": "2024-01-13" },
    { "id": 4, "name": "Surya", "status": "open", "desc": "proxy issue", "stdt": "2024-01-05", "cldt": "2024-01-30"},
    { "id": 5, "name": "Sai", "status": "closed", "desc": "server issue", "stdt": "2024-01-10", "cldt": "2024-01-20"},
    { "id": 6, "name": "Pavan", "status": "closed", "desc": "proxy issue", "stdt": "2024-01-13", "cldt": "2024-01-30" },
    { "id": 7, "name": "Sanmika", "status": "open", "desc": "proxy issue", "stdt": "2024-01-02", "cldt": "2024-01-30"},
    { "id": 8, "name": "Raghuvaran", "status": "closed", "desc": "server issue", "stdt": "2024-01-10", "cldt": "2024-01-20"},
    { "id": 9, "name": "Amrutha", "status": "closed", "desc": "proxy issue", "stdt": "2024-01-03", "cldt": "2024-01-13" },
    { "id": 10, "name": "Sowmya", "status": "open", "desc": "proxy issue", "stdt": "2024-01-05", "cldt": "2024-01-30"},
    { "id": 11, "name": "Abhi", "status": "closed", "desc": "server issue", "stdt": "2024-01-10", "cldt": "2024-01-20"},
    { "id": 12, "name": "Akhil", "status": "closed", "desc": "proxy issue", "stdt": "2024-01-13", "cldt": "2024-01-30" },
    // {  "id":  4,  "name":  "Ajax Programming", "status": "open"  },
    // {  "id":  5,  "name":  "jQuery", "status": "open"  },
    // {  "id":  6,  "name":  "Mastering Node.js", "status": "open"  },
    // {  "id":  7,  "name":  "Angular JS 1.x", "status": "open"  },
    // {  "id":  8,  "name":  "ng-book 2", "status": "open"  },
    // {  "id":  9,  "name":  "Backbone JS", "status": "open"  },
    // {  "id":  10,  "name":  "Yeoman", "status": "open"  }
    ]
var data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 }
    ];

var router = express.Router();
var path = require('path');

router.get('/', function (req, res, next) {
    console.log("hi")
})

//API : http://localhost:3020/addIssue
router.post('/addIssue', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With, remember-me");
    var body = req.body;

    issueList.push(body)
    res.json(body);
});

//API : http://localhost:3020/issueList/:id
router.delete('/issueList/:id', function (req, res) {
    var id = req.params.id
    var index = issueList.findIndex(issue => issue.id == id)
    issueList.splice(index, 1);
    res.json(issueList);
});


//API : http://localhost:3020/issueList
router.get('/issueList', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(issueList);
});

//API : http://localhost:3020/updateIss
router.put('/updateIss', function (req, res) {   
    var obj = issueList.findIndex(issue => issue.id == req.body.id)
    issueList[obj] = req.body
    res.json(issueList);
});

module.exports = router;