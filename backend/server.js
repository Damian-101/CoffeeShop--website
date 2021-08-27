import express from "express";
import path from "path"
import {getItems} from "./api/itemsApi.js"
const app = express();
const __dirname = path.resolve();

app.use(express.static(__dirname + "/build"))

app.use("/js",express.static(__dirname + "static/js"))
app.use("/css",express.static(__dirname + "static/css"))
app.use("/media",express.static(__dirname + "static/media"))


app.get("/", (req,res) => {
    res.sendFile("index.html",{root: __dirname})
})

app.get("/menu", (req,res) => {
    res.sendFile("menu.html",{root: __dirname + "/build"})
})

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
    res.header("Access-Control-Allow-Headers", "Content-Type")
    next()
})

app.use(express.json());
//items
app.get("/menuItems",(req,res) => {
    const get = async () => {
        const items = await getItems()
        res.send(items)
    }
    get().catch(console.dir)
})


// app.post("/menuItems",(req,res) => {
//     console.log(req.body)
//     res.end()
// })



let port = process.env.PORT || 4000
// listning to the port
app.listen(port,() => console.log(`Listening on Port ${port}...`))


  
