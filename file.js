const express = require('express')

const app = express()

app.use(express.static("public"))
let Products=[
    {
        code:"pen000",
        name:"Blue Pen",
        price:13.99,
        manufacturer : "Schnieder"
    },
    {
        code:"pcl000",
        name:"Pencil",
        price:7.99,
        manufacturer : "Mapped"
    },
    {
        code:"bkk000",
        name:"Book",
        price:9.99,
        manufacturer : "Mapped"
    },
    {
        code:"rlr000",
        name:"Ruler",
        price:4.99,
        manufacturer : "Mapped"
    },
    {
        code:"ers000",
        name:"Eraser",
        price:7.99,
        manufacturer : "Schnieder"
    }
]
app.use(express.static("./"))
app.set('view engine', 'ejs');

app.get("/",(req,res)=>
{
    res.render("index",{
        Products:Products
    })
    console.log("it works")
})

app.listen(4000)