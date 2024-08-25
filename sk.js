const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/bfhl', (req, res) => {
    const data = req.body.data || [];
    const alphabets = data.filter(item => /^[a-zA-Z]+$/.test(item));
    const numbers = data.filter(item => /^[0-9]+$/.test(item));
    const highestLowercaseAlphabet = alphabets.filter(item => /^[a-z]+$/.test(item)).sort().slice(-1)[0] || null;

    res.json({
        alphabets,
        numbers,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    });
});

app.listen(port, () => {
    console.log("Server running on port ${port}");
});