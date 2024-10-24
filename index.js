import express from "express";

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/hello",async (req,res) => {
    res.send("hello")    
})

// POST endpoint
app.post("/", async (req, res) => {
    try {
        const body = req.body; // Using req.body instead of req.json()
        console.log(body);

        // You can add logic to process the body here
        
        res.status(200).json({ message: "Data received", data: body });
    } catch (error) {
        console.error("Error processing request:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Start the server
const PORT = 4444;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
