 
import mongoose from 'mongoose'; 
import { MONGO_URI } from '../config';

export default async() => {
console.log("MONGO_URI",MONGO_URI)
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log("DB Connected")
    } catch (err) {
        console.log(err);
        process.exit(1);
    }

}
  
  
 
