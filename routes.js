const express = require('express')
const router = express.Router()
const foodMiddleware = require('./foodMiddleware')
const newOrderMid = require('./newOrderMiddleware').newOrderMiddleware


router.get('/ping', (req, res) => {
    res.json('pong')
})

router.get("/weather/:state", (req, res) => {
    let state = req.params.state
    var myRegEx = /[a-zA-Z]/i;
    var isValid = myRegEx.test(state);
    if (isValid) {
        res.status(200).json({ [state]: Math.floor(Math.random() * (100 - 1 + 1) + 1) });
    } else {
        res.status(400).json({ 'error': 'input string is not in the correct format' });
    }


});

router.get('/foodProducts',foodMiddleware.GetFoodProductsList, foodMiddleware.sendFoodResponse)
router.get('/foodProductById',foodMiddleware.GetFoodProductById, foodMiddleware.sendFoodResponse)

router.post('/new_order', newOrderMid.newOrderValidator, newOrderMid.addOrdertoDataBase)

// router.post("/new_order", (req, res) => {
//     const order = req.body;

//     if (order.food_name || order.customer_name || order.food_qty) {
//         orders.push({
//             ...order,
//             id: orders.length + 1,
//             date: Date.now().toString()
//         });
//         console.log();
//         res.status(200).json({
//             message: "Order created successfully"
//         });
//     } else {
//         res.status(400).json({
//             message: "Invalid Order creation"
//         });
//     }
// });




/**
 *  Getting All orders
 */

router.get("/get_orders", (req, res) => {
    if (orders.length)
        res.status(200).send(orders);
    else
        res.status(200).json("no order found");
});

/**
 * Update order
 */
router.put("/order/:id", (req, res) => {
    const order_id = req.params.id;
    const order_update = req.body;
    for (let order of orders) {
        if (order.id == order_id) {
            if (order_update.food_name != null || undefined)
                order.food_name = order_update.food_name;
            if (order_update.food_qty != null || undefined)
                order.food_qty = order_update.food_qty;
            if (order_update.customer_name != null || undefined)
                order.customer_name = order_update.customer_name;

            return res
                .status(200)
                .json({ message: "Updated Succesfully", data: order });
        }
    }

    res.status(404).json({ message: "Invalid Order Id" });
});

/**
 * Delete Order
 */
router.delete("/order/:id", (req, res) => {
    const order_id = req.params.id;

    for (let order of orders) {
        if (order.id == order_id) {
            orders.splice(orders.indexOf(order), 1);

            return res.status(200).json({
                message: "Deleted Successfully"
            });
        }
    }

    res.status(404).json({ message: "Invalid Order Id" });
});

module.exports = router