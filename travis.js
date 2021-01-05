const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const passport = require('passport')

const travis = express()
const PORT = process.env.PORT || 5000

// Priority serve any static files.
travis.use(express.static(path.join(__dirname, './react-ui/public/index.html')))

// configure body parser for AJAX requests
travis.use(
	bodyParser.urlencoded({
		extended: false,
	})
)
travis.use(bodyParser.json())

const db = require('./config/keys').mongoURI

// Connect to MongoDB
mongoose
	.connect(db, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('MongoDB successfully connected'))
	.catch(err => console.log(err))

const users = require('./routes/api/users')

travis.use(passport.initialize())

require('./config/passport')(passport)

travis.use('/api/users', users)

travis.listen(PORT, function () {
	console.log(`Node ${'test server ' + process.pid}: listening on port ${PORT}`)
})

setTimeout(function () {
	process.kill(process.pid, 'SIGTERM')
}, 30000)
