const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: { // dslkjfélkdsjf455643653é4
        // Ez a mező típusa. Ez egy másik dokumentum _id értékét tartalmazza, 
        // a people kollekcióból.
        type: mongoose.Schema.Types.ObjectId,
        // A másik mongoose model, ami az adott kolllekciót kezeli (Person)
        ref: 'Person',
        // Kötelező. Nem tudok létrehozni postot, csak ha megadom a szerző 
        // személy _id értékét.
        required: true
    }
}, {
    timestamps: true
});

PostSchema.plugin(idValidator);

module.exports = mongoose.model('Post', PostSchema);
