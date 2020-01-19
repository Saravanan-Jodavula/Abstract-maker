const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const fs = require('fs')


const PORT = 8000;
app.use('/form', express.static(__dirname + '/index.html'));

// default options
app.use(fileUpload());


app.post('/', function(req, res) {
  let sampleFile;
  let uploadPath;
  
  
  const okr = require('./app')
  if (!req.files || Object.keys(req.files).length === 0) {
     console.log("no file gang")
     fs.writeFileSync('data.json',JSON.stringify(req.body))
  okr.mainn()
  res.download('output.docx')
   }
else{
  console.log('req.files >>>', req.files); // eslint-disable-line

  sampleFile = req.files.sampleFile;

  uploadPath = __dirname + '/' + sampleFile.name;

  sampleFile.mv(uploadPath, function(err) {
    // if (err) {
    //   return res.status(500).send(err);
    // }

   
   fs.writeFileSync('data.json',JSON.stringify(req.body))
    /////////////////////////////////////////////////////
    console.log(sampleFile.name)
    fs.writeFileSync('filename',sampleFile.name)
    console.log(typeof(req.body))
    console.log(req.body)
   var x = 1
    const okr = require('./app')
    okr.mainn()
    //fs.unlinkSync("image.jpg")
    const jko = () =>{
    
     fs.readFile('flag','utf8',(err,data) =>{
       if(err) throw err
       console.log("sex sex fast fast",data)
       
       if(data==="sex"){
           console.log("seks speed too much")
           res.download('output.docx')
           return 0
       }
    })
   }
  
exports.jko = jko;

  
  });
}
  
  
});

app.listen(PORT||process.env.PORT , function() {
  console.log('Express server listening on port ', PORT); // eslint-disable-line
});

