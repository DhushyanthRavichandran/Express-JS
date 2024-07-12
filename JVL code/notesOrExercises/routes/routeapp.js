const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const adminRoutes=require('./notesOrExercises/routes/admin.js');
const homeRoutes=require('./notesOrExercises/routes/home.js');


//by using this routes we can access the component that are 
//available in the other folders too;
//it will act as a callback function
app.use(adminRoutes);

//then we can use  the url to be common for 2 3 pages
//so that the prefix of all the 3 pages were same like
//admin/home and admin/hello and etc
//instead we can use that in the .use()
//like   
// app.use('admin',homeRoutes);->then it will default search for 
//admin/home if not found if it is just home then it will throw 404 error
//page
app.use(homeRoutes);
//this is for the urls that doesnt exist in our 
//system. if we type url it will check through all the 
//url found or not found and atlast it will come to this and 
//excette this default code
app.use((req,res,next)=>{
     res.status(404)
    .send('<h1>404 page not found</h1>')
})
app.use(bodyParser.urlencoded({extended:true}));
app.listen(5000);
