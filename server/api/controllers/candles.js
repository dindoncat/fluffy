const CandleModel = require('../../db/models/candle')


const candleControllers = {
    getAllCandles: (req, res) => {
        res.send('some candles here!');
    },
    async createCandle(req, res){
        try {
            const newCandle = new CandleModel({
                name: req.body.name,
                price: req.body.price,
                scent: req.body.scent,
                description: req.body.description
            });
            const candle = await newCandle.save();
            res.status(201).json(candle);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    },
    async updateCandle(req, res){
        try {
            const candle = await CandleModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
            res.status(200).json(candle);
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    },
    async deleteCandle(req, res){
        try {
            const candle = await CandleModel.findByIdAndDelete(req.params.id);
            res.status(200).json(candle);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }
}

module.exports = candleControllers;