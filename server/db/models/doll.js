const mongoose = require('mongoose');

const dollSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A doll must have a name'],
        trim: true,
        unique: true,
        maxlength: [100, 'Name cannot exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price cannot be negative']
    },
    image: {
        type: String,
        default: 'default-doll.jpg' // Best practice: always have a fallback
    },
    description: {
        type: String,
        required: [true, 'Please provide a product description'],
        trim: true
    },
    active: {
        type: Boolean,
        default: true,
        select: false // Hides this field from queries by default (useful for soft deletes)
    }
}, {
    timestamps: true,
});

// Indexing price for better search performance
dollSchema.index({ price: 1 });

const DollModel = mongoose.model('Dolls', dollSchema);
module.exports = DollModel
