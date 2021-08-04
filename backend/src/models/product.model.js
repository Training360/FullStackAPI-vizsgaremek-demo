const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    description: String,
    price: {
      type: Number,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);

/*
export class Product {
  _id: string = '';
  name: string = '';
  description: string = '';
  price: number = 0;
  active: boolean = true;
}
*/