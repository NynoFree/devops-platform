import express from "express";

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
    res.json({ status: "200", service: "user-service" });
});

app.listen(3000, () => {
    console.log("User service running on port 3000");
});