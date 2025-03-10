const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/test", (req, res) => {
    const { number } = req.body;
    if (!number) {
        return res.status(400).json({ error: "عدد وارد نشده!" });
    }
    res.json({ result: number * 2 });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
