const config = require('../../config');
const UserModel = require('../../db/models/user');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createToken = (user_id,role) => {
    return jwt.sign({_id:user_id,role:role},config.cookieSecret || "secret",{expiresIn:"1440mins"});
}

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
    },
    async signUp(req, res) {
        try {
            const { name, username, password, role } = req.body;
            let hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new UserModel({ name, username, password: hashedPassword ,role});
            const user = await newUser.save();
            user.password = "***"
            const token = createToken(user._id, user.role)
            res.status(201).json({token, user});
        } catch (error) {
            if (error.code === 11000){
                return res.status(400).json({ msg:"Email already in system",code:11000 });
            }
            res.status(502).json({ message: error.message });
        }
    },
    async login(req, res) {
        try {
            const { username, password } = req.body;
            const user = await UserModel.findOne({ username });
            if (!user) {
                return res.status(401).json({ message: 'Invalid username or password' });
            }

            const validPassword = await bcrypt.compare(password, user.password);

            if (!validPassword){
                return res.status(401).json({ message: 'Invalid username or password' });
            }
            user.password = "***"
            const token = createToken(user._id, user.role)
            // Optional: Set cookie if you still want to support cookie-based auth in parallel, 
            // but pure JWT usually just returns it. 
            // We'll keep cookie for convenience if frontend expects it, but we won't rely on it in session.
            res.cookie("token", token,{
                httpOnly: false, 
                secure: true,
                expires: new Date(Date.now()+1000*60*60*24)
            })
            res.status(200).json({token, role:user.role, userId:user._id, name:user.name});
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async logout(req, res) {
        try {
            res.cookie("token", "", {
                httpOnly:false,
                expires: new Date(Date.now()-1000)
            })
            res.status(200).json({ message: 'Logged out successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = userControllers;