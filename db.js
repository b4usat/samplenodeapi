let orders = []

function insertDb(order) {
    try {
        orders.push({
            ...order,
            id: orders.length + 1,
            date: Date.now().toString()
        });

    } catch{
        return 'failed'
    }
    return 'success'
}

module.exports = {
    insert: insertDb
}