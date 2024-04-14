const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://shankhyac:a9883056609@clustertestforapp.raezrtd.mongodb.net/?retryWrites=true&w=majority&appName=ClusterTestforApp";


// MongoDB Atlas connection URI


// Create a new MongoClient instance
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Function to connect to MongoDB Atlas and ping the deployment
async function run() {
  try {
    // Connect the client to MongoDB Atlas
    await client.connect();

    // Ping the deployment to confirm the connection
    await client.db("admin").command({ ping: 1 });

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    // Close the connection after completing the operation
    await client.close();
  }
}

// Call the run function
run().catch(console.dir);