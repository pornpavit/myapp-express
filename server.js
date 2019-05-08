const express = require('express')
const app = express()
const port = 3000
const handlerApp = (req, res) => {
    console.log(req.params.name)
    res.send(`hello  ` + req.params.name)
}

app.get('/app/:name', handlerApp)

app.post('/apppost', (req, res) => res.send('post 1234'))

app.listen(port, () => console.log(`exaple app port ${port}!`))
