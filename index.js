require("dotenv").config()
const express = require('express')
const hbs = require("hbs")

const app = express()
const port = process.env.PORT

app.set("view engine", "hbs")
hbs.registerPartials(__dirname + "/views/partials")

app.use(express.static("public"))

app.get('/', (req, res) => {
  res.render("home", {
    name: "Derwin Romero"
  })
})

app.get('/generic', (req, res) => {
  res.render("generic", {
    name: "Derwin Romero at generic"
  })
})

app.get('/elements', (req, res) => {
  res.render("elements", {
    name: "Derwin Romero at elements"
  })
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + "/public/404.html")
})

app.listen(port, () => {
  console.log(`Example pp listeing at http://localhost:${port}`);
})
