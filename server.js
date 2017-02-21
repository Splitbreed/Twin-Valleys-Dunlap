var express = require('express'),
    app     = express(),
    path    = require('path'),
    favicon = require('serve-favicon'),
    port    = process.env.PORT || 3000;

    // app.use(favicon(path.join(__dirname,'/favicon.ico')));

    app.use(express.static(path.join(__dirname,'public')));

    app.use('/scripts', express.static(__dirname + '/bower_components'));

    app.all('/*', function(req, res, next){
      res.sendFile('/public/index.html', { root: __dirname });
    });

    app.listen(port, function(){
      console.log("+=+=+=+=+=+=+=+=+=+=+=+=+=+=+");
      console.log("Running node on port "+port);
      console.log("+=+=+=+=+=+=+=+=+=+=+=+=+=+=+")
    });
