import express from 'express'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'
import { matchRoutes } from 'react-router-config'
import Routes from './client/Routes'
import 'babel-polyfill'

const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
	const store = createStore()

	// MatchRoutes Returns [ { route: ... }]
	// Map returns an array of promises
  	const promises = matchRoutes(Routes, req.path).map(({route}) => {
		return route.loadData ? route.loadData(store) : null
	});
	Promise.all(promises).then(() => {
		res.send(renderer(req, store))
	})
})

app.listen(3000, () => {
	console.log('Listening on port 3000')
})

