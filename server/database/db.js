import mongoose from 'mongoose';


const Connection = async (URL) => {


    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
        console.log('database connected successfully');
    } catch (error) {
        console.log('Error:', error.message);
    }
}

export default Connection;