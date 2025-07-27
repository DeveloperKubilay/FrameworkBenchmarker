import Fastify from 'fastify'

const app = Fastify()

app.get('/', async (request, reply) => {
  return 'Hello World!_Hello World!_Hello World!_Hello World!_Hello World!'
})

app.listen({ port: 3000 })
