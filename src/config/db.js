import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE)
        console.log('MongoDB Atlas connected successfully!');
    } catch (error) {
        console.log('MongoDB Atlas connected failed | Error: ', error);
    }
}

export default connectDB;