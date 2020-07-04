const restify = require('restify')
const cors = require('cors')


const server = restify.createServer({
  name: 'pizza-rest-api',
  version:'1.0.0'
})

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.use(cors())

const pizza = {
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
}

server.get('/pizza', (req, resp, next) => {
  resp.json(pizza)
  next()
})

server.get('/recomendacao', (req, resp, next) => {
  resp.json(pizza.mass)
  next()
})

server.get('/size/:id', (req, resp, next) => {
  const { size } = pizza
  const filtered = size.filter((size) => {
    return size.id === req.params.id
  })

  if(filtered.length){
    resp.json(filtered[0])

  }else{
    resp.status(404)

    resp.json({ messsage: 'not found'})
  }
  // resp.json(size)
  return next()
})

server.get('/recheio', (req, resp, next) => {
  const { pizzas } = pizza
  resp.json(pizzas)
  next()
})
server.get('/recheio/:id', (req, resp, next) => {
  const { filling } = pizza
  const filtered = filling.filter(f => f.id === req.params.id)
  console.log(filtered[0])
  resp.json(filtered[0])
  next()
})

// server.get('/test/:name/:id', (req, resp, next) => {
//   resp.json({message: `test 1', ${req.params.name}, ${req.params.id}`})
//   next()
// })


server.listen(3001, () => {
  console.log('api listening at %s', server.name, server.url)
})