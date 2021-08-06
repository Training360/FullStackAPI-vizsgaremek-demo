const Car = require('../../models/car.model');

exports.create = carData => {
    const car = new Car(carData);
    return car.save();
};

exports.findAll = () => Car.find().populate();

exports.findOne = id => Car.findById(id).populate();

exports.update = (id, updateData) => Car.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Car.findByIdAndRemove(id);
