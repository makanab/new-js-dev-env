//This file isn't transpiled so it needs commonJS and Es6

//register babel to transpile before our test is runned
require('@babel/register')();

//disable webpack features that mocha doesn't understand

require.extensions['.scss']= function(){};