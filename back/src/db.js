import mongoose, { mongo } from 'mongoose';

mongoose.connect("mongodb+srv://mauri:Yb6ZnuYH1SL4Na2g@cluster0.obqla.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(db => console.log('Database is connected'))
.catch(err => console.log(err))