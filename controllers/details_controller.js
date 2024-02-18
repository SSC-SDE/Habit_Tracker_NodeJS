const Habit = require('../models/habits');

// Controller to handle the details request
module.exports.details = async function (req, res) {
    try {
        const habits = await Habit.find({});
        return res.render('details', {
            title: "Habit Track Weekly",
            habit_list: habits
        });
    } catch (err) {
        console.error('Error in fetching the habits', err);
        return res.status(500).send('Internal Server Error');
    }
};

// Controller to handle the habit update request
module.exports.updateHabit = async function (req, res) {
    try {
        const id = req.query.id;
        const habit = await Habit.findById(id);

        if (!habit) {
            console.log('Habit not found');
            return res.status(404).send('Habit not found');
        }

        const day = req.query.day;
        const val = req.query.val;

        // Update habit based on the request
        if (Object.prototype.hasOwnProperty.call(habit.days, day)) {
            if (val === "none") {
                habit.days[day] = "yes";
                habit.streak++;
            } else if (val === "yes") {
                habit.days[day] = "no";
                habit.streak--;
            } else {
                habit.days[day] = "none";
            }
        }

        // Save the updated habit
        await habit.save();

        return res.redirect('back');
    } catch (err) {
        console.error('Error in updating habit', err);
        return res.status(500).send('Internal Server Error');
    }
};
