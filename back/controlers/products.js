const categories = require("../fakeData/categories");
const products = require("../fakeData/products");
var cloneDeep = require('lodash/cloneDeep');

function getProducts() {
    let categoriesClone = cloneDeep(categories);
    try {
        const result = categoriesClone.map(category => {
            category.products = products.filter(product => category.products.includes(product.id));
            return category;
        })
        return result;
    } catch (e) {
        console.log(e);
        return "error";
    }
}

module.exports = {
    getProducts
};