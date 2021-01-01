const supertest = require('supertest')

const server = supertest.agent('localhost:5000')

describe('unit test', () => {
	it('returns homepage', done => {
		server
			.get('/')
			.expect('Content-type', /text/)
			.expect(200)
			.end(function (err, res) {
				done()
			})
	})
})
