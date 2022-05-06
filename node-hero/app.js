const express = require('express');
const app = express();
const router = express.Router();
const request = require('request');


PUBLIC_KEY = 'cedc9bb50244fa730f40b2e1d15ac0a5';
HASH = '1047a7d106c75bf2253f8779d9b910a6';
app.get('/getData', (req, res, next) => {
    request({
        uri: `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`,
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                console.log(body);
            }
        }
    }).pipe(res)
});


app.listen(3000, (req, res) => {
    console.log('Express API is running at port 3000')
})

module.exports = router;