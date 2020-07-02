var MongoClient = require('mongodb').MongoClient;
const foodDburl = "mongodb+srv://gurufood:food123@cluster1-l89tu.mongodb.net/food";
const orderDburl = "mongodb+srv://gurufood:food123@cluster1-l89tu.mongodb.net/order";


const dbMiddleware = {
    insertOrder: (req, res, next) => 
        new Promise((resolve, rejection) => {
            MongoClient.connect(orderDburl, {useUnifiedTopology: true},function (err, db) {
                var dbo = db.db("order");
                dbo.collection("ordercollection").insertOne(req.body,function (err, result) {                  
                    resolve(result);
                })
            })
        }),
    getFoodProducts: (req, res, next) => 
        new Promise((resolve, rejection) => {
            MongoClient.connect(foodDburl, {useUnifiedTopology: true},function (err, db) {
                var dbo = db.db("food");
                dbo.collection("foodcollection").find({}).toArray(function (err, result) {
                    resolve(result);
                })
            })
        }),
        getFoodProductById: (req, res, next) => 
        new Promise((resolve, rejection) => {
            MongoClient.connect(foodDburl, {useUnifiedTopology: true},function (err, db) {
                var query = {foodId:'pizza'};
                var dbo = db.db("food");
                dbo.collection("foodcollection").find(query).toArray(function (err, result) {
                    resolve(result);
                })
            })
        })
    }

module.exports = dbMiddleware
