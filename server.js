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
  if (!req.file || Object.keys(req.file).length === 0) {
     console.log("No File Uploaded")
     fs.writeFileSync('data.json',JSON.stringify(req.body))
  okr.mainn()
  res.download('output.docx')
   }

   else{
     console.log('req.file >>>', req.file); // eslint-disable-line

     sampleFile = req.file

     uploadPath =  sampleFile.path;

       // if (err) {
       //   return res.status(500).send(err);
       // }


      fs.writeFileSync('data.json',JSON.stringify(req.body))
       /////////////////////////////////////////////////////
       console.log(sampleFile.name)
       fs.writeFileSync('filename',sampleFile.path)
       console.log(typeof(req.body))
       console.log(req.body)
      var x = 1
       const okr = require('./app')
       okr.mainn()
       //fs.unlinkSync("image.jpg")
       const jko = () =>{

        fs.readFile('flag','utf8',(err,data) =>{
          if(err) throw err
          console.log("checc checc fast fast",data)

          if(data==="checc"){
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
