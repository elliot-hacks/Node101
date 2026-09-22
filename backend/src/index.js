import app from './app.js';
import connectDB from './config/database.js';
import { PORT } from './config/constants.js';

const startServer = async () => {
    try {
        await connectDB();
        app.on("error", (error) => {
            console.log("Error: ", error);
            throw error;
        });
            app.listen(PORT, () => {
            console.log(`Server is running on Port:
                ${PORT}`);
        });
    } catch (error) {
        console.log(`MongoDB connection Failed: ${error}`);
    };
};

startServer();