const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    products: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Product',
    },
    time: {
        type: Date,
        default: new Date(),
    },
    note: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', OrderSchema);

/*
export class Order {
  _id: string = '';
  user: User = new User();
  products: Product[] = [];
  time: Date = new Date();
  note: string = '';
}
*/