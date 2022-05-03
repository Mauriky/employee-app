import {Schema, model} from 'mongoose'


const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 5
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    
},
);

export default model('User', UserSchema);
