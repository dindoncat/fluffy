const mongoose = require('mongoose');

const candleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A candle must have a name'],
    trim: true,
    unique: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  scent: {
    type: String,
    required: [true, 'Scent profile is required'],
    enum: {
      values: ['Floral', 'Woody', 'Citrus', 'Fresh', 'Spicy'],
      message: '{VALUE} is not a valid scent category'
    }
  },
  image: {
    type: String,
    default: 'default-candle.jpg'
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
candleSchema.index({ price: 1 });

const CandleModel = mongoose.model('Candles', candleSchema);

module.exports = CandleModel