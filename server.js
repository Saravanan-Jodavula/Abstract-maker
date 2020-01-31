const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const fs = require('fs')


const PORT = process.env.PORT || 8000;  //use this while testing on local server
app.use(express.static(__dirname));

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

  uploadPath = __dirname + '/uploads/' + sampleFile.name;

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
       console.log("checc checc fast fast",data)

       if(data==="checc"){
          console.log("output is being generated")
           res.download('output.docx')
           return 0
       }
    })
   }


exports.jko = jko;


  });
}


});

app.listen(PORT , function() {
  console.log('Express server listening on port ', PORT);

});
