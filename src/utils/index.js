/**
 * This function calculates total price of a new order
 * @param {Array} products cartProducts: Array of Objects
 * @returns {number} sum
 */

export const totalPrice = (products) => {
    let sum = 0
    products.forEach(p => sum += p.price)

    return sum
}