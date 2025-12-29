const express = require("express");
const cors = require('cors')
const app = express();
require('dotenv').config();

const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

//mongodb connection
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zmagebg.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
    serverApi: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
})

async function run() {
    try {
        const userCollection = client.db('photography').collection('users');
        const classesCollection = client.db('photography').collection('classes');
        const cartCollection = client.db('photography').collection('cart');
        const instructorsCollection = client.db('photography').collection('instructors');
        const myclassesCollection = client.db('photography').collection('myclasses');
        const paymentCollection = client.db('photography').collection('payment');
        const adminCollection = client.db('photography').collection('admin');

        //user create
        app.post('/users', async (req, res) => {
            const user = req.body;
            const result = userCollection.insertOne(user);
            res.send(result)
        })
        // get all users
        app.get('/users', async (req, res) => {
            const result = await userCollection.find().toArray();
            res.send(result);
        })
        app.get('users/:id', async (req, res) => {
            const id = req.params.id;
            const userId = { _id: new ObjectId(id) };
            const options = {
                // Include only the `title` and `imdb` fields in the returned document
                projection: {
                    _id: 1, email: 1, name: 1, photo: 1
                },
            };
            const user = userCollection.findOne(userId, options);
            res.send(user)
        })

    } finally {

    }
}
run().catch(console.dir)
app.get("/", (req, res) => {
    res.send(" Welcome to the Photography Institute backend!");
});

app.listen(port, () => {
    console.log("Photography Institute backend is running on port 3000");
})
