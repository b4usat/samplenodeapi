function CheckAlphanumeric(inp) {
    var myRegEx = /[a-zA-Z]/;
    return myRegEx.test(inp)
}

function CheckFoodAvailable(item) {
    const availbleItems = ['pizza', 'pancake', 'maggi', 'chicken']
    return availbleItems.indexOf(item) > -1
}

module.exports = {
    isAlphanumeric: CheckAlphanumeric,
    isAvailableItem: CheckFoodAvailable
}