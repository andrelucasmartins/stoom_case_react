const restify = require('restify')

const server = restify.createServer({
  name: 'pizza-rest-api',
  version:'1.0.0'
})

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());


server.get('/pizza', (req, resp, next) => {
  resp.json({message: 'hello world'})
})
server.listen(3001, () => {
  console.log('api listening at %s', server.name, server.url)
})