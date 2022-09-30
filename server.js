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

//add database connection...
// const uri = "mongodb+srv://jurani_mohit:SIT725@sit725.tc86ncg.mongodb.net/?retryWrites=true&w=majority";
// const MongoClient = require('mongodb').MongoClient
// const client = new MongoClient(uri, {useNewUrlParser: true})


//create collection....
// const createCollection = () => {
//     client.connect((err) => {
//         projectCollection =  client.db().collection("RegistrationData");
//         if(!err) {
//             console.log('MongoDB Connected');
//         }
//         else {
//             console.log("DB Error: ", err);
//             process.exit(1);
//         }
//     })
// }

// //insert project......
// const insertProjects = (project, callback) => {
//     projectCollection.insert(project,callback);
// }

// // post api....
// app.post('/api/projects',(req,res) => {
//     console.log("New Project added", req.body);

//     var newProject = req.body;
//     insertProjects(newProject,(err,result) => {
//         if(err) {
//             res.json({statusCode: 400, message: err});
//         }
//         else {
//             res.json({statusCode: 200, message:"Project Successfully added", data: result});
//         }
//     })
// })

var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App listening to: "+port);
    // createCollection();
})