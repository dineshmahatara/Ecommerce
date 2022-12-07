const auth = require("../app/middleware/auth.middleware");

const router = require("express").Router();

router.route("/")
    .get((req, res, next) =>{

    })
    .post(auth, (req, res, next) => {
        // category create
        res.json({
            result: req.auth_user,
            status: true, 
            msg: "Category..."
        })
    })

module.exports = router;