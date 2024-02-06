const express = require('express')
const Sentry = require('@sentry/node')

const app = express()
const morgan = require('morgan')
const database = require('./database')
const http = require('http')
const router = require('./routes')

const server = http.createServer(app)

app.use(morgan('dev'))
app.use(Sentry.Handlers.requestHandler())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)
app.set('port', process.env.PORT || 3000)





server.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`)
})
