import  express from 'express'
import path from 'path'
import webpack from  'webpack'

/* eslint-disable no-console */
const app = express();
const port = 3000;

const webpackConfig = require('../webpack.config');
const compiler = webpack(webpackConfig);

const webpackMiddlware = require('webpack-dev-middleware')(
    compiler,webpackConfig.output.publicPath
)
app.use(webpackMiddlware);


app.get('/users',(req,res,)=>{

     res.json(
        [
            {"id":1,"firstName":"Jhon","lastName":"Doe","email":"jhondoe@yahoo.com"},
            {"id":2,"firstName":"Bob","lastName":"Smith","email":"smithbob@gmail.com"},
            {"id":3,"firstName":"Max","lastName":"Brad","email":"brax@yahoo.com"}
        ]
     );


})

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../dist/index.html'));

});


app.listen(port,(err)=>{
    if(err){ console.log(err);
    console.log('express server started port 3k...');

    }

})

