const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;



// 99 Bottles of Beer
app.get('/', (req, res) => {
    res.send(`
        <h1>99 Bottles of beer on the wall</h1>
        <a href="/98">"Take one down pass it around"</a>
    `);
});

// BONUS 99 little bugs
app.get('/debug', (req, res) => {
    res.send (`<h2>99 Little bus in the code</h2><h2>99 Little bugs</h2>
    <a href="/debug/123>Take one down patch it around</a>
    `);
});

// 99 Bottles Continued
app.get('/:number_of_bottles', (req, res) => {
    let nextPage = parseInt(req.params.number_of_bottles) - 1
    if (parseInt(req.params.number_of_bottles) > 0) {
        res.send(`<h2>${req.params.number_of_bottles} Bottles of beer on the wall</h2>
        <a href='${nextPage}'>Take one down pass it around</a>`)
    } else{
        res.send(`
        <h1>The Beer is Gone!</h1>
        <a href="/">Who is going to the store!</a>`);
    }
}) 

// BONUS 99 Little Bugs Continued
app.get('/bug/:num', (req,res) => {
    let rdm = Math.floor(Math.random() * 50) + 1;
    let nextBug = parseInt(req.params.num) + rdm;
    res.send(`
        <h2>${req.params.num} Little bugs in the code</h2><h3>${req.params.num} Little bugs</h3>
        <a href ='/bug/${nextBug}'>Take one down patch it around</a>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
