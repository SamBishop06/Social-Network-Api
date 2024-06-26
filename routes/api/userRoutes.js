    // This file defines routes for handling CRUD operations related to users

    const router = require('express').Router();
    const {
        getAllUsers,
        getUserById,
        createUser,
        updateUser,
        deleteUser,
        addFriend,
        deleteFriend
    } = require('../../controllers/userController');

    // GET and POST all users
    router.route('/').get(getAllUsers).post(createUser);

    // GET user id, PUT update user id and DELETE user by id
    router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);

    // POST add friend and DELETE remove Friend
    router.route('/:userId/:friends/:friendId').post(addFriend).delete(deleteFriend);

    // Export the router
    module.exports = router;