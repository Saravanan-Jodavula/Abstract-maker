# Abstract-maker
This app generates abstracts in IEEE format by taking in inputs through a form.

# Usage
This app takes inputs through a basic HTML form and creates an IEEE abstract document in .docx format. This app can also extract 
content from image and generate document.
 
# Note:
You should have tesseract-ocr on your local server/deployment server for this app to work. You can find tesseract-ocr [here](https://github.com/tesseract-ocr/tesseract)

# heroku
For this app to work on heroku, You might want to install [heroku-buildpack-apt](https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-apt) and add the following lines in Aptfile: 
```
tesseract-ocr
tesseract-ocr-eng
libxrender1
libssl1.0.0
```

