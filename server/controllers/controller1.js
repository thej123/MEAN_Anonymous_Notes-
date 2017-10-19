var mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = {
    showall: function(req, res) {
        console.log("inside showall");
        var jobs = Note.find({}, function (err, data) {
            if (err) {
                console.log("could not retrive data");
                res.json(err);
                return;
            }
            res.json(data);
        });
    },
    create: function (req, res) {
        console.log("inside create");
        console.log(req.body);
        var job = new Note(req.body);
        job.save(function (err, aNote) {
            if(err) {
                res.json (err);
                return;
            }
            res.json(aNote);
        });
    },
}