const app = require('./app')
    db = require('./models/db')


app.listen(app.get('port'),() =>{
    console.log(`Iniciando la apiRest en el puerto ${app.get('port')}`)
})
