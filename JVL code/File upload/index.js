const express=require('express');
const app=express();
const multer=require('multer');
const path=require('path');

app.set('views',path.join(__dirname,"view"));
app.set('view engine',"ejs");

var storage= multer.diskStorage({
    destination: (req,file,callback)=>{
        callback(null,'uploads');
    },
    filename: (req,file,callback)=>{
        callback(null,file.originalname.replace(/\.[^/.]+$/,"")+ Date.now()+path.extname(file.originalname));
    }

})
let maxSize=2*1000*1000;

let upload=multer({
    storage:storage,
    limits:{
       fileSize:maxSize
    },
    fileFilter:(req,file,callback)=>{
        console.log(file.mimetype);
        let filtetypes=/jpeg|jpg|png/;
        let mimetype=filtetypes.text(file.mimetype);
        let extname=filtetypes.test(path.extname(file.originalname).toLowerCase())
        if(mimetype && extname){
            return callback(null,true);

        }
        callback("error file upload only supports the following "+filtetypes)
    }
}).single('mypic');

app.get('/',(req,res)=>{
    res.render('upload');
})

app.post('/upload',(req,res,next)=>{
    upload(req,res,(err)=>{
    if(err){
        if(err instanceof multer.MulterError && err.code=="LIMIT_FILE_SIZE"){
            return res.send("File size is maximum 2 mb");
        }
        res.send(err);
    }else{
        res.send("success Image uploaded" );
    }
})

})

app.listen(5000,()=>{
    console.log('server is running');
})