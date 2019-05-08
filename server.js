const express = require('express')
const app = express()
const port = 3000

const handlerApp = (req, res) => {
    console.log(req.params.name)
    res.send(`hello  ` + req.params.name)
}
app.get('/app/:name', handlerApp)

const calculate = (req, res) => {
    console.log(req.params);
    const a = req.params.a
    const b = req.params.b
    var parsed1 = parseInt(a, 10);
    var parsed2 = parseInt(b, 10);
    res.send('result => ' + (parsed1 + parsed2))
}
app.get('/cal/:a/:b', calculate)

app.post('/apppost', (req, res) => res.send('post 1234'))

app.listen(port, () => console.log(`exaple app port ${port}!`))
