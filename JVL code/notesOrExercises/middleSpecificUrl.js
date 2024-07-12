const http=require('http');
const express=require('express');
const app=express();

//to navigate to the next url we can use the
//arguments inside the .use()
//since all the urls have '/' it can detect always the
//'/' so we can put it in the end

app.use('/second',(req,res,next)=>{
    console.log('this is a second middleware');
    res.send('<h1>this is a second page</h1>')
});
app.use('/',(req,res,next)=>{
    console.log('this is a first middleware');
    
});

const server=http.createServer(app);
server.listen(5000);