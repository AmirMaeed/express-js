const express = require('express');
const app = express();



app.set('view engine','ejs')

app.use( express.json())
app.use(express.urlencoded({extended:true}))
// Route
app.get('/', (req, res) => {
  res.send('<h1>Hello, Express!</h1>');
});

// query method
app.get('/search', (req, res) => {
    const name = req.query.name;
    const age = req.query.age
  res.send(`My name is ${name} and my age is ${age}`);
});

// ejs setup
app.get('/user', (req, res) => {
  res.render('user-detail');
});


// send data
app.post('/user', (req, res) => {
  res.send(req.route);
});



// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});