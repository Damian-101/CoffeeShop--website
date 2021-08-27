const MongoClient = require("mongodb").MongoClient;

const uri = "mongodb+srv://shenal:tnekK8RUtBJFBKJ@cluster0.r2hzh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const run = async () => {
        await client.connect();

        const database = client.db("items")
        const collection = database.collection("coffeeshop-items")

        // const query = {};
        // const item = await items.findOne(query)
        const items = await client.db("items").collection("coffeeshop-items").find().toArray()
        return items
}

run().catch(client.close(),console.dir)

exports.getItems = async () => {
    const data = await run()
    return data
}

