const express = require('express')
const app = express()
const morgan = require('morgan')

const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
]

const shoes = [
  { name: 'Birkenstocks', price: 50, type: 'sandal' },
  { name: 'Air Jordans', price: 500, type: 'sneaker' },
  { name: 'Air Mahomeses', price: 501, type: 'sneaker' },
  { name: 'Utility Boots', price: 20, type: 'boot' },
  { name: 'Velcro Sandals', price: 15, type: 'sandal' },
  { name: 'Jet Boots', price: 1000, type: 'boot' },
  { name: 'Fifty-Inch Heels', price: 175, type: 'heel' }
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
  const index = parseInt(req.params.index)

  if (index < collectibles.length) {
    const collectiblesName = collectibles[index].name
    const collectiblesPrice = collectibles[index].price
    res.send(
      `So, you want the ${collectiblesName}? For ${collectiblesPrice}, it can be yours!`
    )
  } else {
    res.send('This item is not yet in stock. Check back soon!')
  }
})

//exercise 4

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
