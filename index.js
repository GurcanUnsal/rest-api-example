import express from "express";
import allRoutes from "./src/route/restRoute.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();

const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/employeeDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

allRoutes(app);

app.get("/api", (req, res) => {
    res.send(`Server is started on port ${PORT}`);
});

app.listen(PORT, (err) => {
    if (err) {
        console.error(`Something went wrong : ${err}`);
    } else {
        console.log(`Server is started on port ${PORT}`);
    }
})
