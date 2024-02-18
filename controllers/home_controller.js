const Habit = require('../models/habits');

// Homepage controller
module.exports.home = async function (req, res) {
    try {
        const habits = await Habit.find({});
        return res.render('home', {
            title: "Habit Track",
            habit_list: habits
        });
    } catch (err) {
        console.error('Error in fetching the habits', err);
        return res.status(500).send('Internal Server Error');
    }
};

// Controller to create a habit
module.exports.createHabit = async function (req, res) {
    try {
        const days = {
            one: "none",
            two: "none",
            three: "none",
            four: "none",
            five: "none",
            six: "none",
            seven: "none",
        };

        const newHabit = await Habit.create({
            habit: req.body.habit,
            end: req.body.end,
            description: req.body.description,
            frequency: req.body.frequency,
            date: Date(),
            time: req.body.time,
            days: days
        });

        console.log(newHabit);
        return res.redirect('back');
    } catch (err) {
        console.error('Error in creating habit', err);
        return res.status(500).send('Internal Server Error');
    }
};

// Controller to delete a habit
module.exports.deleteHabit = async function (req, res) {
    try {
        const id = req.query.id;
        await Habit.findByIdAndDelete(id);
        return res.redirect('back');
    } catch (err) {
        console.error('Error in deleting Habit', err);
        return res.status(500).send('Internal Server Error');
    }
};
