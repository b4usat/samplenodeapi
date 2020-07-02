const validators = require('./utlities')
const errors = require('./errors')
const dbMiddleware = require('./dbMiddleware')

exports.newOrderMiddleware = {
    newOrderValidator: (req, res, next) => {
        let err = [];
        var foodname = req.body.food_name
        var isValid = validators.isAlphanumeric(foodname)
        if (!isValid)
            err.push('Food name is invalid')
        var availability = validators.isAvailableItem(foodname)
        if (!availability)
            err.push('Sorry!! food not ready at this moment')
        if (err.length == 0) {
            next()
        } else {
            next(new errors.ServiceError(err.join(' , ')))
        }
    },

    addOrdertoDataBase: (req, res, next) => {
        dbMiddleware.insertOrder(req).then(result => {
            if (result) {
                res.status(200).json({
                    message: "Order created successfully"
                });
            }
            else {
                res.status(500).json({
                    error: "Internal Server Error"
                });
            }
        })
    },



    sendAcknowledgement: (req, res, next) => {

    }
}

