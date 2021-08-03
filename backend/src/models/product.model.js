const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    active: Boolean,
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