var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
  'article-one':{
  title:'Article one',
  heading:'Article_1',
  date:'August 19,2017',
  content:`<p>
        This is my first html page of this app.This is my first html page of this app.This is my first html page of this app.
        This is my first html page of this app.This is my first html page of this app.This is my first html page of this app.
        This is my first html page of this app.This is my first html page of this app.
      </p> `
  },
  'article-two':{ title:'Article two',
  heading:'Article_2',
  date:'August 21,2017',
  content:`<p>
        This is my first html page of this app.This is my first html page of this app.This is my first html page of this app.
        This is my first html page of this app.This is my first html page of this app.This is my first html page of this app.
        This is my first html page of this app.This is my first html page of this app.
      </p> `},
  'article-three':{ title:'Article Three',
  heading:'Article_3',
  date:'August 20,2017',
  content:`<p>
        This is my first html page of this app.This is my first html page of this app.This is my first html page of this app.
        This is my first html page of this app.This is my first html page of this app.This is my first html page of this app.
        This is my first html page of this app.This is my first html page of this app.
      </p> `}
};
function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmlTemplate=`
<!DOCTYPE html>
  <head>
    <title>${title}</title>
    <meta name="viewport" content="width-device-width, initial-scale=1"/>
   <link href="/ui/style.css" rel="stylesheet" />
  </head>
  <body>
      <div class="container">
    <div>
    <a href="/">Home</a>
    </div>
    <hr/>
    <h1>
      ${heading}
    </h1>
    <div>
      ${date}
    </div>
    <div>
     ${content}
    </div>
      </div>
  </body>
</html>`
;
return htmlTemplate;
}




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/:articleName',function(req,res){
    //articleName== article-0ne
    //articles[articleName]=={}content object for article one
    var articleName= req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
