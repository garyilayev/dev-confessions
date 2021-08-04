import mongoose from 'mongoose';

const confessionSchema = mongoose.Schema({
    name:{
        type: String,
        default: "Anonymous Dev"
    },
    content:{
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const Confession = mongoose.model('Confession', confessionSchema);

export default Confession;