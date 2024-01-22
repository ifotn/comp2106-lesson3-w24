let express = require('express');
let path = require('path');

// create a new express application
let app = express();

// set global path to all views
let viewPath = path.join(__dirname, 'views');
console.log(viewPath);

// create page route handlers
let home = (req, res) => {
    if (req.url === '/' || req.url === '/home')  {
        //res.writeHead(200, { 'Content-Type': 'text/html'} );
        //res.write('<h1>Home</h1>');
        res.sendFile(`${viewPath}/index.html`);
        //res.end();
    }
    else {
        // url not found
        res.writeHead(404, { 'Content-Type': 'text/html'} );
        res.write('<h1>Not Found</h1>');
        res.end();
    }
};

let about = (req, res) => {
    /*res.writeHead(200, { 'Content-Type': 'text/html'} );
    res.write('<h1>About</h1>');
    res.end();*/
    res.sendFile(`${viewPath}/about.html`);
};

let contact = (req, res) => {
    /*res.writeHead(200, { 'Content-Type': 'text/html'} );
    res.write('<h1>Contact</h1>');
    res.end();*/
    res.sendFile(`${viewPath}/contact.html`);
};

let greet = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html'} );
    res.write(`<h1>Hello ${req.params.name}</h1>`);
    res.end();
}

let redirect = (req, res) => {
    console.log('Redirecting home...');
    res.redirect('/');
};

// route handling
app.use('/home', home);
app.use('/about', about);
app.use('/contact', contact);
app.use('/greet/:name', greet);
app.use('/redirect', redirect);
app.use('/', home);

// start the server
app.listen(3000);
console.log('Express server running on port 3000');