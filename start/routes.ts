/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.on('/').redirectToPath('/login');

Route.post('/signup', 'UsersController.store')
Route.post('/login', 'UsersController.login')

Route.get('/clients', 'ClientsController.index').middleware('auth')
Route.get('/clients/:id', 'ClientsController.show').middleware('auth')
Route.post('/clients', 'ClientsController.store').middleware('auth')
Route.put('/clients/:id', 'ClientsController.update').middleware('auth')
Route.delete('/clients/:id', 'ClientsController.destroy').middleware('auth')

Route.get('/products', 'ProductsController.index').middleware('auth')
Route.get('/products/:id', 'ProductsController.show').middleware('auth')
Route.post('/products', 'ProductsController.store').middleware('auth')
Route.put('/products/:id', 'ProductsController.update').middleware('auth')
Route.delete('/products/:id', 'ProductsController.destroy').middleware('auth')

Route.post('/sales', 'SalesController.store').middleware('auth')