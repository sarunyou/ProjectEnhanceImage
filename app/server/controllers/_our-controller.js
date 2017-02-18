exports.helloworld = function(req, res, next) {
    console.log(req.params);
    res.status(200).json({
        message: "Hello world!"
    })
}