/**




  componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/dashboard')
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors,
			})
		}
	}

	export default function todos(state = [], action) {
		switch (action.type) {
			case 'ADD_TODO':
				return state.concat([action.text])
			default:
				return state
		}
	}

	export const GET_TODOS = 'GET_TODOS'
export const TODO_LOADING = 'TODO_LOADING'

"test": "npm run testserver",
		"testserver": "node travis.js",
		"testclient": "cd react-ui/ && npm install && npm run start",

		if (!isDev) {
		app.use(function (req, res, next) {
			var protocol = req.get('x-forwarded-proto')
			protocol == 'https' ? next() : res.redirect('https://' + req.hostname + req.url)
		})
	}

		"devserver": "nodemon server.js",
		"devclient": "npm start --prefix react-ui",
		"dev": "concurrently \"npm run server\" \"npm run devclient\""
*/
