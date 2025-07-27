import { Elysia } from 'elysia'

const app = new Elysia()
  .get('/', () => 'Hello World!_Hello World!_Hello World!_Hello World!_Hello World!')
  .listen(3000)
