module.exports = (model, populateList = []) => {
    return {
        create: entityData => {
            const entity = new model(entityData);
            return entity.save();
        },
        
        findAll: () => model.find().populate(...populateList),
        
        findOne: id => model.findById(id).populate(...populateList),
        
        update: (id, updateData) => model.findByIdAndUpdate(id, updateData, {new: true}),
        
        delete: id => model.findByIdAndRemove(id),
    };
};
