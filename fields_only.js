const jrf = require('./lib/index')

data = {
    uuid: 'main-uuid',
    username: 'lucas',
    password: '565-6.-5656-54-54-564-',
    timestamp: {
        uuid: 'timestamp-uuid',
        created_at: '10/05/2019',
        updated_at: '11/05/2019',
        deleted_at: null
    }
}

console.log('Teste 1 fields: ', 
    JSON.stringify(jrf.only(data, ['uuid', 'username', 'created_at'])) == JSON.stringify({
        uuid: 'main-uuid',
        username: 'lucas',
        timestamp: {
            uuid: 'timestamp-uuid',
            created_at: '10/05/2019',
        }
    }) ? 'Sucesso' : 'Falhou'
)

data = {
    uuid: 'main-uuid',
    username: 'lucas',
    password: '565-6.-5656-54-54-564-',
    timestamp: {
        uuid: 'timestamp-uuid',
        created_at: '10/05/2019',
        updated_at: '11/05/2019',
        deleted_at: null
    }
}

console.log('Teste 2 fields: ', 
    JSON.stringify(jrf.only(data, ['username'])) == JSON.stringify({
        username: 'lucas'
    }) ? 'Sucesso' : 'Falhou'
)

data = {
    uuid: 'main-uuid',
    username: 'lucas',
    password: '565-6.-5656-54-54-564-',
    timestamp: {
        uuid: 'timestamp-uuid',
        created_at: '10/05/2019',
        updated_at: '11/05/2019',
        deleted_at: null
    }
}

console.log('Teste 3 fields: ', 
    JSON.stringify(jrf.only(data, ['uuid', 'username', 'created_at', 'timestamp'])) == JSON.stringify({
        uuid: 'main-uuid',
        username: 'lucas',
        timestamp: {
            uuid: 'timestamp-uuid',
            created_at: '10/05/2019',
            updated_at: '11/05/2019',
            deleted_at: null
        }
    }) ? 'Sucesso' : 'Falhou'
)

data = ['foo', 'bar', 'foobar']

console.log('Teste 4 fields: ', 
    JSON.stringify(jrf.only(data, ['foo', 'foobar'])) == JSON.stringify(['foo', 'foobar']) ? 'Sucesso' : 'Falhou'
)

data = [['foo', 'bar'], 'foobar']

console.log('Teste 5 fields: ', 
    JSON.stringify(jrf.only(data, ['foo', 'foobar'])) == JSON.stringify([['foo'], 'foobar']) ? 'Sucesso' : 'Falhou'
)

data = [['foo', 'bar'], {foobar: {uuid: 'teste-uuid', username: 'lucas'}}]

console.log('Teste 6 fields: ', 
    JSON.stringify(jrf.only(data, ['foo', 'uuid'])) == JSON.stringify([['foo'], {foobar: {uuid: 'teste-uuid'}}]) ? 'Sucesso' : 'Falhou'
)

data = [['foo', 'bar'], {foobar: {uuid: 'teste-uuid', username: 'lucas'}}]

console.log('Teste 7 fields: ', 
    JSON.stringify(jrf.only(data, ['foo', 'foobar'])) == JSON.stringify([['foo'], {foobar: {uuid: 'teste-uuid', username: 'lucas'}}]) ? 'Sucesso' : 'Falhou'
)
