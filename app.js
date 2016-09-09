var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();

var skierTerms = [
    {
        term: "Rip",
        defined: "To move at a high rate of speed"
    },
    {
        term: "Huck",
        defined: "To throw your body off of something, usually a natural feature like a cliff"
    },
    {
        term: "Chowder",
        defined: "Powder after it has been sufficiently skied"
    }
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
	next();
});

app.use(express.static("./app"));

app.use(cors());


//routes
app.get('/', function (req, res) {
   res.sendfile('app/index.html');
});

app.post("/test",function(req,res){


    skierTerms.push(req.body);


    console.log(req.body.amount);

    res.send("ssa");

});



app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;