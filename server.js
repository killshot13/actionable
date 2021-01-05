const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cluster = require('cluster')
const numCPUs = require('os').cpus().length
const path = require('path')
const passport = require('passport')

const isDev = process.env.NODE_ENV !== 'production'

// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
	console.error(`Node cluster master ${process.pid} is running`)

	// Fork workers in production
	for (let i = 0; i < numCPUs; i++) {
		cluster.fork()
	}
	cluster.on('exit', (worker, code, signal) => {
		console.error(
			`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`
		)
	})
} else {
	const app = express()
	const PORT = process.env.PORT || 5000

	// always use HTTPS
	const forceSSL = function () {
		return function (req, res, next) {
			if (req.headers['x-forwarded-proto'] !== 'https') {
				return res.redirect(['https://', req.get('Host'), req.url].join(''))
			}
			next()
		}
	}
	if (!isDev) {
		app.use(forceSSL())
	}

	// Priority serve any static files.
	app.use(express.static(path.join(__dirname, './react-ui/public/index.html')))

	// configure body parser for AJAX requests
	app.use(
		bodyParser.urlencoded({
			extended: false,
		}),
		bodyParser.json()
	)

	// init passport to await API calls
	const users = require('./routes/api/users')
	app.use(passport.initialize())
	require('./config/passport')(passport)
	app.use('/api/users', users)

	// Connect to MongoDB
	const db = require('./config/keys').mongoURI
	mongoose
		.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => console.log('MongoDB successfully connected'))
		.catch(err => console.log(err))

	// setup event listener
	app.listen(PORT, function () {
		// return build details
		console.log(
			`Node ${
				isDev ? 'dev server ' + process.pid : 'cluster worker ' + process.pid
			}: listening on port ${PORT}`
		)
	})

	// log app crashes
	app.on('exit', (code, signal) => {
		console.error(
			`Node process ${process.pid} terminated with: code ${code}, signal ${signal}`
		)
	})
}
