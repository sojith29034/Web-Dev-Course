import express from 'express';
const app = express();
const port = 3000;

// GET function
app.get("/", (req, res) => {
    res.send("<h1>Hello, World!</h1>");
    // console.log(req.rawHeaders);
})
app.get("/about", (req, res) => {
    res.send("<h1>Hello, World! I am Sojith.</h1>");
})
app.get("/contact", (req, res) => {
    res.send("<h1>Hello, World! Contact me now.</h1>");
})

app.post("/register", (req, res) => {
    res.sendStatus(201);
})
app.put("/user/sojith", (req, res) => {
    res.sendStatus(200);
})
app.patch("/user/sojith", (req, res) => {
    res.sendStatus(200);
})
app.delete("/user/sojith", (req, res) => {
    res.sendStatus(200);
})

// LISTENING
app.listen(port, ()=>{
    console.log(`Server running on port ${port}.`)
})