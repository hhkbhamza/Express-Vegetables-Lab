const express = require("express")
const app = express()
const PORT = 3000
const fruits = require("./models/fruits")
const reactViews = require('express-react-views')
const vegetables = require("./models/vegetables")

app.use(express.static("public "))
app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())

// OR
// app.engine("jsx", require('express-react-views').createEngine())


app.get("/fruits", (req, res) => {
  res.render("Index", {fruits: fruits})
})

app.get("/fruits/:indexOfFruit", (req, res) => {
  // res.send(fruits[req.params.indexOfFruit])
  res.render("Show", fruits[req.params.indexOfFruit])

})

app.get("/vegetables", (req, res) => {
    res.render("./vegetables/Index", {vegetables: vegetables})
  })

app.get("/vegetables/:indexOfVegetable", (req, res) => {
    // res.send(fruits[req.params.indexOfFruit])
    res.render("Show", vegetables[req.params.indexOfVegetable])
  
  })



app.listen(PORT, () => { 
  console.log(`Listening on port: ${PORT}`)
});



