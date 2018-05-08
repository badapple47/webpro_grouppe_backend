const express       = require('express')
const mongoose      = require('mongoose')
const bodyParser    = require('body-parser')

app = express()
port = process.env.PORT || 8082

const User = require('./api/models/userListModel')
// const auth = require('./api/models/authModel')
const authGrouppe = require('./api/models/authGrouppe')
const eventGrouppe = require('./api/models/eventGrouppe')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/grouppe', (err) => {
    if (err) throw err
    console.log('Successfully connected.')
})

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

const routes = require('./api/routes/userListRoutes')
// const authroutes = require('./api/routes/authRoutes')
const authGrouppeRoutes = require('./api/routes/authGrouppeRoutes')
const eventGrouppeRoutes = require('./api/routes/eventGrouppeRoutes')

routes(app)
// authroutes(app)
authGrouppeRoutes(app)
eventGrouppeRoutes(app)

app.listen(port)
console.log('Server started on: ' + port);
