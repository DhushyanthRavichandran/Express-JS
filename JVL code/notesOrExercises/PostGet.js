const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/first', (req, res, next) => {
    res.send('<h1>This is a second page</h1><form action="/second" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form>');
});
//this second can we accessed by typing the url also
//typically using get method. but who ever can access our server by 
//knowing our domain.
// so we instead of .use we use post 
//if change it from use to post. then it can be accesed only by using 
//post request
app.post('/second', (req, res, next) => {
   
    res.send(`<h1>Form submitted</h1><p>Title:</p>`);
});

app.use('/', (req, res, next) => {
    console.log('This is the first middleware');
    res.send('<h1>Welcome to the Home Page</h1>');
});

app.listen(5000, () => {
    console.log('Server is running on port 3000');
});
