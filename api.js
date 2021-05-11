const mysql =  require("mysql");
const express = require("express");
const app = express();

// connecting to db 
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "shenal2003",
    database:"coffeeshop",
})

con.connect((err) => {
    if (err) throw err;
    console.log("connected");
    con.query(sql,function(err,result){
        if(err)throw err;
        global.itemData = result
    })
})

const sql = 
    "SELECT items.item_id, items.item_name, item_cate.cate_type, item_prices.item_Price FROM items JOIN item_prices ON items.item_id = item_prices.item_id JOIN item_cate ON items.cate_id = item_cate.cate_id;"


app.get("/", (req,res) => {
    res.sendFile("homepage.html", {root: __dirname})
})

app.use("/public",express.static(__dirname + "/public"))
 
console.log(__dirname)

app.get("/items",(req,res) => {
    res.send(global.itemData)
    console.log(itemData)
})
app.get("/items/:item_id", (req, res) => {
    const item =  itemData.find(i => i.item_id === parseInt(req.params.item_id))
    if(!item) res.status(404).send("item not found")
    res.send(item)
})

let port = process.env.PORT || 3000
// listning to the port
app.listen(port,() => console.log(`Listening on Port ${port}...`))

  
