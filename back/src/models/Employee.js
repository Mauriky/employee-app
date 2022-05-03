import {Schema, model} from 'mongoose'

const EmployeeSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 5
    },
    lastName: {
        type: String,
        minlength: 5
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5
    },
    nationality: {
        type: String,
        required: true,
        minlength: 5
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        minlength: 5
    },
    civilStatus: {
        type: String,
        minlength: 5
    },
    birthday: {
        type: String,
        minlength: 5
    },
},
);

export default model('Employee', EmployeeSchema);
