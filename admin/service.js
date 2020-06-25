const request = require('request')

const employeeService = {
    GetAllEmployees: () => {
        return new Promise((resolve, reject) => {
            const options = {
                uri: 'http://dummy.restapiexample.com/api/v1/employees',
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            }
            request(options, (err, response, body) => {
                if (err) {
                    reject(err)
                }
                else {
                    const result = JSON.parse(response.body)
                    resolve(result)
                }
            })
        })
    }
}

module.exports = employeeService

