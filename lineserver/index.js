const request = require('request');
const dotenv = require('dotenv');
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
const cors = require('cors')

dotenv.config();

const url_line_notification = "https://notify-api.line.me/api/notify";

app.use(cors());
app.use(express.json());
app.post('/post',(req,res)=>{
    console.log(req.body.message)
    request({
        method: 'POST',
        uri: url_line_notification,
        header: {
            'Content-Type': 'multipart/form-data',
        },
        auth: {
            bearer: process.env.TOKEN,
        },
        form: {
            message: req.body.message
        },
    }, (err, httpResponse, body) => {
        if (err) {
            console.log(err)
            res.json({message:'error'})
        } else {
            console.log(body)
            res.json(body)
        }
    });
    
})

app.listen(port,()=>console.log('server start....'));