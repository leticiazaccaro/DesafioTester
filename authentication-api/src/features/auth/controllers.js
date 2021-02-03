const Boom = require('boom')
const Validator = require('fastest-validator')
const jwt = require('jsonwebtoken')

const services = require('./services')

const v = new Validator()

module.exports = {
    auth: async ctx => {
        const { request: { body }, response } = ctx

        console.log(body)

        const schema = {
            email: { max: 255, min: 5, type: 'string' },
            password: { max: 16, min: 8, type: 'string' }
        }
        const errors = v.validate(body, schema)
        
        if(Array.isArray(errors) && errors.length) {
            response.status = 400
            console.log("400")
            return response.body = Boom.badRequest(null, errors)
        }

        const user = await services.auth(body)
        if (user) {
            console.log("Usuário encontrado")
            return response.body = { 
                result: "Encontrado"
            }
        } else {
            console.log("Usuário não autorizado")
            return response.body = { result: "Não encontrado" }
        }
    }
}