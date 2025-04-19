const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())
app.get('/', (req, res) => {
  const usuario = { nome: "Lucas", idade: 22 };
  res.json(usuario)
})


app.get('/sobre', (req, res) => {
    res.send('Inocação e tecnologia! A frente.')
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})