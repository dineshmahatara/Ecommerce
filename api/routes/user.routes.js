const auth = require("../app/middleware/auth.middleware");
const { isAdmin } = require("../app/middleware/rbac.middleware");
const uploader = require("../app/middleware/uploader.middleware");
const UserController = require("../app/controller/user.controller");

const user_ctrl = new UserController();
const router = require("express").Router();

router.route("/")
    .get(auth,isAdmin, user_ctrl.getUsers)
    .post(auth, isAdmin, uploader.single('image'), user_ctrl.userStore)

router.route("/:id")
    .get(user_ctrl.getUserById)
    .delete(auth, isAdmin, user_ctrl.deleteById)
    .put(auth, isAdmin,uploader.single("image"), user_ctrl.userUpdate)
module.exports = router;