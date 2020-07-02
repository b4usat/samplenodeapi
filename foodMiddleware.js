const dbMiddleware = require('./dbMiddleware')

const foodMiddleware = {
    GetFoodProductsList: (req, res, next) => {
       dbMiddleware.getFoodProducts(req, res, next).then(response=>{
            req.foodDetails = response;
            next()
        });
    },
    GetFoodProductById: (req, res, next) => {
        dbMiddleware.getFoodProductById(req, res, next).then(response=>{
             req.foodDetails = response;
             next()
         });
     },
    sendFoodResponse: (req, res, next) => {
        res.status(200).json(req.foodDetails)
    },
}

module.exports = foodMiddleware