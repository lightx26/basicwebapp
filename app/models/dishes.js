const mysql = require('../config/connectDB.js');

const Dish = function (dish) {
    Dish.dish_id = dish.dish_id,
    Dish.dish_name = dish.dish_name,
    Dish.price = dish.price,
    Dish.available = dish.available,
    Dish.category_id = dish.category_id
};

Dish.getDishes = async function() {
    try {
        const res = await mysql.query("select * from dishes inner join categories on dishes.category_id = categories.category_id where available = true")

        if (res[0].length > 0) {
            return res[0];
        }

        else return null;
    }

    catch (err) {
        console.log("Error occurs at Dish.getAllDishes:", err);
        throw err;
    }
}

module.exports = Dish;