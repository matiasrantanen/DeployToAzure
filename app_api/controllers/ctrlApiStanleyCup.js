// Get access to the database connection
const mongoose = require('mongoose');

// Get access to the 'stanleycup' model to interact with the stanleycup collection
const StanleyCupModel = mongoose.model('stanleycup');

const winnersList = function (req, res) {

    StanleyCupModel.find({}, function(err, winners) {
        if (err) {
            res.status(404).json(err);
        }
        else {
            res.status(200).json(winners);
        }
    });
};

const addWinner = function (req, res) {
    StanleyCupModel.create(req.body, function(err, newWinner) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.status(201).json(newWinner);
        }
    });
};

module.exports = {
    winnersList,
    addWinner
};
