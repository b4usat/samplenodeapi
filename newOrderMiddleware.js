const validators = require('./utlities')
const errors = require('./errors')
const db = require('./db')

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
        const order = req.body;
        var result = db.insert(order)
        if (result === 'success') {
            res.status(200).json({
                message: "Order created successfully"
            });
        } else {
            res.status(500).json({
                error: "Internal Server Error"
            });
        }
    },

    

    sendAcknowledgement: (req, res, next) => {

    }
}

