const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://shankhyac:a9883056609@clustertestforapp.raezrtd.mongodb.net/?retryWrites=true&w=majority&appName=ClusterTestforApp";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {

    strict: false,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch{
    console.error("failed");
  }
  
}
run().catch(console.dir);