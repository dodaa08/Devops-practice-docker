import express from "express";
const app = express();

const port = 8080;

app.get("/", (req, res)=>{
    res.send("Hello world image updated..");
});

app.listen(port, ()=>{
    console.log("Running the hello world image..", port);
});