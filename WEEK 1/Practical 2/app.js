import express from "express";

const app = express();

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//Responding with hello world on homepage
app.get('/', (req,res) => {
    res.send('Hello World!')
})

//Responding to POST request on root route
app.post('/', (req,res) => {
    res.send('Got a POST request')
})

//Responding to PUT request on /user route
app.put('/user', (req,res) => {
    res.send('Got a PUT request at /user.')
})

//Responding to DELETE request on /user route
app.delete('/user', (req,res) => {
    res.send('Got a DELETE request at /user.')
})

//trying to open static files
app.use(express.static("public"))

