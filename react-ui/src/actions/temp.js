/**
componentDidMount() {
  if (this.props.auth.isAuthenticated) {
    this.props.history.push('/dashboard')
  }
}

  componentWillReceive(nextProps) {
		if (nextProps.auth.isAuthenticated) {
			this.props.history.push('/dashboard')
		}

		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors,
			})
		}
	}



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

*/