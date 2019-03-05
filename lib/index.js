const _ = require('lodash')

exports.only = (source, fields) => {
    let remove = (obj) => {
        _.map(obj, (value, key) => {
            if((_.isArray(value) || _.isObject(value)) && !_.includes(fields, key)){
                obj[key] = remove(value)
                
                if(!_.isEmpty(obj[key])) return 
            }

            if(!_.includes(fields, value) && _.isArray(obj)) {
                obj.splice(key, 1)
                return
            }
            if(!_.includes(fields, key) && !_.isArray(obj)) {
                delete obj[key]
                return
            }
        })

        return obj
    }

    return remove(source)
}