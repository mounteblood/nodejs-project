import express from 'express'
import mongoose from 'mongoose'
import Post from "./post.js";

const PORT = 7777;
const DB_URL = 'URL';
const app = express();

app.post('/', async (req, res) => {
    const {author, title, contect, picture} = req.body
    const post = await Post.create({author, title, contect, picture})
    res.status(200).json('server on')
});

async function startApp(){
    try{
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, function(err){
            if (err) console.log("Error in server setup")
            console.log("Server listening on Port", PORT);
        })
        
    } catch(e){
        console.log(e)
    }
}

startApp()
