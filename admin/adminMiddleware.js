const { request } = require("express")
const apiList = require('./service')

const adminMiddleware = {
    GetAllEmployeeList: (req, res, next) => {
        //validations or any business logic
        apiList.GetAllEmployees().then(result => {
            if (result.status === 'success') {
                req.employess = result.data
                next()
            }
            else{
                //error
            }

        }).catch(e => {
            next(e)
        })
    },

    sendResponse: (req, res, next) => {
        res.status(200).json(req.employess)
    }
}

module.exports = adminMiddleware