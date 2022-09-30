require('dotenv').config()
var express = require("express")
var app = express()
var cors = require('cors')
let projectRoutes = require("./routes/projectRoutes");
let userRoute = require("./routes/userRoutes");

let projectCollection; 

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use('/api/projects',projectRoutes)

app.use('/api/user',userRoute)

app.get('/addNumber/:n1/:n2', function(request, response){
    response.json({statusCode: 200});
    response.sendStatus(200);
})

app.get('/addTwoStrings/a/b', function(req,res,next){
    var firstNumber = req.params.firstNumber
    var secondNumber = req.params.secondNumber
    var result = firstNumber + secondNumber || null
    if(result == null) {
        res.json({result: result, statusCode: 400}).status(400)
        }
      else { res.json({result: result, statusCode: 200}).status(200) } 
    })
    

app.get('/addTwoNumbers/:firstNumber/:secondNumber', function(req,res,next){
    var firstNumber = parseInt(req.params.firstNumber)
    var secondNumber = parseInt(req.params.secondNumber)
    var result = firstNumber + secondNumber || null
    if(result == null) {
        res.json({result: result, statusCode: 400}).status(400)
        }
      else { res.json({result: result, statusCode: 200}).status(200) } 
    })
    
var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App listening to: "+port);
})