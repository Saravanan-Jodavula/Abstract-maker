const express = require('express');
const multer = require('multer');
const app = express();
const fs = require('fs')
const path = require('path');
app.use(express.static(__dirname));

//constant definitions
const PORT = process.env.PORT || 8000;
const NODE_ENV = process.env.NODE_ENV || 'development';
app.set('port', PORT);
app.set('env', NODE_ENV);
var upload = multer({ dest: 'uploads/' })


app.post('/', upload.single('sampleFile'), function (req, res, next) {

  const okr = require('./app')
  //if there is no image
  if (!req.file || Object.keys(req.file).length === 0) {
     console.log("No File Uploaded")
     //writes data fetched from front end into a file which acts as buffer for app.js to read and process
     fs.writeFileSync('data.json',JSON.stringify(req.body))
  okr.mainn() //calling main functionality of app.js i.e, creating the output doc
  res.download('output.docx') //sending generated output doc to download
   }
//If there is an image
   else{
     console.log('req.file >>>', req.file); // eslint-disable-line
    //file fetched from input(image)
     sampleFile = req.file
    //path of file
     uploadPath =  sampleFile.path;

       // if (err) {
       //   return res.status(500).send(err);
       // }

//writing data into a file to be accessed by app.js
      fs.writeFileSync('data.json',JSON.stringify(req.body))

       console.log(sampleFile.name)   //debug statement
       fs.writeFileSync('filename',sampleFile.path) 
       console.log(typeof(req.body))  //debug statement
 
       console.log(req.body)  //debug statement
 //requiring app.js and calling it's main functionality to generate doc
       const okr = require('./app')
       okr.mainn()
       //exporting jko to be called in app.js
/*
generally, code in the jko() function doesn't wait until a doc is created due
to asynchronous nature of node.js. So, I'm calling the main function which creates
 the doc first and then calling jko in the main function in app.js after creation 
 of doc. In this way, doc will be sent to download only after creating.
*/
       const jko = () =>{

        fs.readFile('flag','utf8',(err,data) =>{  //flag read from a buffer file to ensure better synchronization
          if(err) throw err
          console.log("checc checc fast fast",data)

          if(data==="checc"){ //flag read from a buffer file to ensure better synchronization
             console.log("output is being generated")
              res.download('output.docx')
              return 0
          }
       })
      }
    exports.jko = jko;
 }
});
   
app.listen(PORT , function() {
  console.log('Express server listening on port ', PORT);
})
