const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true,
    },
    address: String,
    active: Boolean,
    role:  {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});
UserSchema.plugin(require('mongoose-bcrypt'));

module.exports = mongoose.model('User', UserSchema);

/*
export class User {
  _id: string = '';
  firstName?: string = '';
  lastName?: string = '';
  email?: string = '';
  address?: string = '';
  active?: boolean = true;
  password?: string = '';
  accessToken?: string = '';
}
*/