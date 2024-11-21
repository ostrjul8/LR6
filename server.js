const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "save.html"));
});

app.post("/save-masonry", (req, res) => {
    const { columns, masonryData } = req.body;

    const dataToSave = {
        columns: columns,
        masonryData: masonryData
    };

    fs.writeFile("package-lock.json", JSON.stringify(dataToSave), (err) => {
        if (err) {
            return res.status(500).send("Не вдалося зберегти дані");
        }
        res.status(200).send("Дані збережено!");
    });
});

app.get("/get-masonry", (req, res) => {
    fs.readFile("package-lock.json", "utf8", (err, data) => {
        if (err) {
            return res.status(500).send("Не вдалося отримати дані");
        }
        res.status(200).json(JSON.parse(data)); 
    });
});

app.listen(port, () => {
    console.log(`Сервер працює на http://localhost:${port}`);
});
