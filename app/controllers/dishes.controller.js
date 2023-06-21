const Dish = require("../models/dishes.js");

async function getAllDishes(req, res) {
    try {
        const dishes = await Dish.getDishes();

        if (dishes) {
            res.render('pages/dishes', {dishes: dishes})
        }
    }

    catch (err) {
        res.status(500).render('static/error500')
    }
}

async function findDishes(req, res) {
    try {
        const name = req.query.name;

        const dishes = await Dish.getDishes();

        if (dishes) {
            const result = []

            dishes.forEach(dish => {
                if (dish.dish_name.includes(name)) result.push(dish);
            });

            res.render('pages/dishes', {dishes: result});
        }
    }
    
    catch (err) {
        console.log(err);
        res.status(500).render('static/error500')
    }
}

module.exports = {
    getAllDishes,
    findDishes,
}