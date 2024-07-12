const http=require('http');
const express=require('express');
const app=express();
//we can we n number of middleware
//to use middleware we need to use
//.use()
app.use((req,res,next)=>{
    console.log('this is a first middleware');
    next();
    //if we didn't give next() it will not move to the next middleware
});
app.use((req,res,next)=>{
    console.log('this is a second middleware');
    next();
});
app.use((req,res,next)=>{
    console.log('this is a third middleware');
    // res.send('<h1>hello<h1>')
    res.send({hello:"hi"})
});

const server=http.createServer(app);
server.listen(5000);