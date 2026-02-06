const DollModel = require('../../db/models/doll');

const dollControllers = {
    getAllDolls: (req, res) => {
        res.send('some dolls here!');
    },
    async createDoll(req, res){
        try {
            const newDoll = new DollModel({
                name: req.body.name,
                price: req.body.price,
                description: req.body.description
            });
            const doll = await newDoll.save();
            res.status(201).json(doll);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    },
    async updateDoll(req, res){
        try {
            const doll = await DollModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
            res.status(200).json(doll);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    },
    async deleteDoll(req, res){
        try {
            const doll = await DollModel.findByIdAndDelete(req.params.id);
            res.status(200).json(doll);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

}
module.exports = dollControllers;
