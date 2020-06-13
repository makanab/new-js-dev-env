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


app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../dist/index.html'));

});


app.listen(port,(err)=>{
    if(err){ console.log(err);
    console.log('express server started port 3k...');

    }

})

