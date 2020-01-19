var PizZip = require("pizzip");
var Docxtemplater = require("docxtemplater");
const tesseract = require("node-tesseract-ocr");
const fs = require("fs");
//const pkr = require("./server");


function mainn(){
  
    var abc = JSON.parse(fs.readFileSync("data.json"));
    var flag
const config = {
  lang: "eng",
  oem: 1,
  psm: 3
};

var nof = fs.readFileSync("filename");
//fs.unlink('filename',function(){console.log("hi")})
if (fs.existsSync(`${nof}`)) {
//   fs.renameSync(`${nof}`,'image.jpg');
  tesseract
    .recognize(`${nof}`, config)
    .then(text => {
      fs.writeFile("kk", text,function(){
        fs.readFile("kk", "utf8",function(err,data){
            fs.unlink(`${nof}`,function(){
                console.log('image deleted')

            })
            
            function klm(){
            if(err) throw(err)

            console.log("this is", typeof data);
            var txtt = data.toString();
            txtt = txtt.trim();
            abc.Abs1 = txtt;
                if (txtt.length > 0) 
                    abc.hasAbs1 = true;
                      console.log(txtt);
                    // console.log(nof);
                    console.log("hello thissa final",abc)
                   
            }
           async function kkk(){
                let ok = await klm()
                var path = require("path");
                //Load the docx file as a binary
                   var content = fs.readFileSync(path.resolve(__dirname, "input.docx"), "binary");
                   var zip = new PizZip(content);
                   var doc = new Docxtemplater();
                   doc.loadZip(zip);
                   //set the templateVariables
                   var pp = abc.Abs2;
                   if (pp.length > 0) {
                   abc.hasAbs2 = true;
                   }
                   doc.setData(abc);
                   console.log(abc);
                   try {
                   // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
                   doc.render();
                   } catch (error) {
                   // The error thrown here contains additional information when logged with JSON.stringify (it contains a properties object containing all suberrors).
                   function replaceErrors(key, value) {
                       if (value instanceof Error) {
                       return Object.getOwnPropertyNames(value).reduce(function(error, key) {
                           error[key] = value[key];
                           return error;
                       }, {});
                       }
                       return value;
                   }
                   console.log(JSON.stringify({ error: error }, replaceErrors));
       
                   if (error.properties && error.properties.errors instanceof Array) {
                       const errorMessages = error.properties.errors
                       .map(function(error) {
                           return error.properties.explanation;
                       })
                       .join("\n");
                       console.log("errorMessages", errorMessages);
                       // errorMessages is a humanly readable message looking like this :
                       // 'The tag beginning with "foobar" is unopened'
                   }
                   throw error;
                   }
       
                   var buf = doc.getZip().generate({ type: "nodebuffer" });
       
                   // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
                //    function kite(callback){
                //    fs.writeFile(path.resolve(__dirname, "output.docx"), buf)
                //     callback()
                // }
                const promise = new Promise((resolve,reject)=>{
                    fs.writeFile(path.resolve(__dirname, "output.docx"), buf)
                    resolve('good')
                }).then(value=>{
                   //  var ee = "sex"
                        fs.writeFileSync('flag',ee)
                        fs.readFile('flag','utf8',(err,data) =>{
                            if(err) throw err
                            console.log("sex sex fast fast",data)
                            
                     //       if(data==="sex"){
                                console.log("seks speed too much")
                                res.download('output.docx')
                           // }
                        })
                }).catch(err=>{
                    console.log(err)
                })
                //    function hey(){
                //         return 1
                        // var ee = "sex"
                        // fs.writeFileSync('flag',ee)
                        // fs.readFile('flag','utf8',(err,data) =>{
                        //     if(err) throw err
                        //     console.log("sex sex fast fast",data)
                            
                        //     if(data==="sex"){
                        //         console.log("seks speed too much")
                        //         res.download('output.docx')
                //          }
                //          })
                // //    }
                //    kite(hey)
                 
       
            }
            kkk()


          
})
      })

    })
    return 1
}

else{
        var path = require("path");
         //Load the docx file as a binary
            var content = fs.readFileSync(path.resolve(__dirname, "input.docx"), "binary");
            var zip = new PizZip(content);
            var doc = new Docxtemplater();
            doc.loadZip(zip);
            //set the templateVariables
            var pp = abc.Abs2;
            if (pp.length > 0) {
            abc.hasAbs2 = true;
            }
            doc.setData(abc);
            console.log(abc);
            try {
            // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
            doc.render();
            } catch (error) {
            // The error thrown here contains additional information when logged with JSON.stringify (it contains a properties object containing all suberrors).
            function replaceErrors(key, value) {
                if (value instanceof Error) {
                return Object.getOwnPropertyNames(value).reduce(function(error, key) {
                    error[key] = value[key];
                    return error;
                }, {});
                }
                return value;
            }
            console.log(JSON.stringify({ error: error }, replaceErrors));

            if (error.properties && error.properties.errors instanceof Array) {
                const errorMessages = error.properties.errors
                .map(function(error) {
                    return error.properties.explanation;
                })
                .join("\n");
                console.log("errorMessages", errorMessages);
                // errorMessages is a humanly readable message looking like this :
                // 'The tag beginning with "foobar" is unopened'
            }
            throw error;
            }

            var buf = doc.getZip().generate({ type: "nodebuffer" });

            // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
           // fs.writeFileSync(path.resolve(__dirname, "output.docx"), buf);
           fs.writeFile(path.resolve(__dirname, "output.docx"), buf,function(){
            return 1
            var ee = "sex"
            fs.writeFileSync('flag',ee)
            fs.readFile('flag','utf8',(err,data) =>{
                if(err) throw err
                console.log("sex sex fast fast",data)
                
                if(data==="sex"){
                    console.log("seks speed too much")
                    res.download('output.docx')
             }
             })
       });

} 
    
}

////////////////////////////////////////////////////////////////
const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();



const PORT = 8001;
app.use('/form', express.static(__dirname + '/index.html'));

// default options
app.use(fileUpload());

app.get('/ping', function(req, res) {
  res.send('pong');
});

app.post('/', function(req, res) {
  let sampleFile;
  let uploadPath;
  
  
 
  if (!req.files || Object.keys(req.files).length === 0) {
     console.log("no file gang")
     fs.writeFileSync('data.json',JSON.stringify(req.body))
  mainn()
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
   // const okr = require('./app')
    
    //fs.unlinkSync("image.jpg")
    async function jko(){
     ab =await mainn()
     if(ab){
     }
   }
   jko()
   
 
    return 
  });
}
  
  
});

app.listen(PORT, function() {
  console.log('Express server listening on port ', PORT); // eslint-disable-line
});


