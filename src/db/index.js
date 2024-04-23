import mongoose from 'mongoose'

const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB Connect Successfully")
    } catch (error) {
        console.log(`MongoDB Connection Failed ` + error)
    }
}

export default ConnectDB