const restify = require('restify')
const cors = require('cors')


const server = restify.createServer({
  name: 'pizza-rest-api',
  version:'1.0.0'
})

server.use(cors())
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

const pizza = [{
  mass: [
    { id: 1, name: 'Pan' },
    { id: 2, name: 'Normal' },
    { id: 3, name: 'Cream Cracker' }
  ],
  size: [
    { id: 1, type: 4 },
    { id: 2, type: 8 },
    { id: 3, type: 12 },
    { id: 4, type: 16 }
  ],
  filling: [
    { id: 1, name: 'Calabresa' },
    { id: 2, name: 'Lombo' },
    { id: 3, name: 'Atum' },
    { id: 4, name: 'Toamte' },
    { id: 5, name: 'Parmesam' },
    { id: 6, name: 'Gorganzola' },
    { id: 7, name: 'Queijo Cheddar' },
    { id: 8, name: 'Azeitonas' },
    { id: 9, name: 'Cebola' }
  ],
  pizzas: [
    {id: 1, name: 'Calabre'},
    {id: 2, name: 'Atum'},  
    {id: 3, name: 'Atum'},    
    {id: 4, name: 'Atum'},    
    {id: 5, name: 'Atum'},     
    {id: 6, name: 'Atum'},     
    {id: 7, name: 'Atum'}     
  ]
}]
server.get('/pizza/:id', (req, resp, next) => {
  resp.json(pizza)
  next()
})

server.get('/recomendacao/:name', (req, resp, next) => {
  resp.json(pizza[0].pizzas)
  next()
})

server.get('/size', (req, resp, next) => {
  resp.json(pizza[0].size)
  next()
})

server.get('/recheio', (req, resp, next) => {
  resp.json(pizza[0].pizzas)
  next()
})


server.listen(3001, () => {
  console.log('api listening at %s', server.name, server.url)
})