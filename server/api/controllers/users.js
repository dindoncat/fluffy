const UserModel = require('../../db/models/user');

const userControllers = {
    getAllUsers: (req, res) => {
        res.send('some users here!');
    },
    async createUser(req, res){
        try {
            const newUser = new UserModel({
                name: req.body.name,
                username: req.body.username,
                password: req.body.password
                });
            const user = await newUser.save();
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    },
    async updateUser(req, res) {
        try {
            const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    },
    async deleteUser(req, res) {
        try {
            const user = await UserModel.findByIdAndDelete(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }
}

module.exports = userControllers;