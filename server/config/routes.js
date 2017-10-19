var controller1 = require('../controllers/controller1.js');

module.exports = function(app) {

    app.get('/notes', controller1.showall);
    app.post('/notes', controller1.create);

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./angularNote/dist/index.html"))
    });

}