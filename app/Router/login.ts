import Route from '@ioc:Adonis/Core/Route'

Route.get('/login', async () => {
  return { hello: 'login' }
})