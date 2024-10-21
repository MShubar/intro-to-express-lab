const express = require('express')
const app = express()
const morgan = require('morgan')

const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
]

app.use(morgan('dev'))

//exercise 1
app.get('/greetings/:name', (req, res) => {
  res.send(`Hello ${req.params.name}`)
})

//exercise 2
app.get('/roll/:number', (req, res) => {
  const rollNum = req.params.number
  randomNum = Math.floor(Math.random() * rollNum)
  res.send(`You rolled a ${randomNum}`)
})

//exercise 3
app.get('/collectibles/:index', (req, res) => {
  let collectiblesName = collectibles[req.params.index].name
  let collectiblesPrice = collectibles[req.params.index].price
  res.send(
    `So, you want the ${collectiblesName}? For ${collectiblesPrice}, it can be yours!`
  )
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
