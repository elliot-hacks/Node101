import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
});

export const MONGODB_USERNAME = process.env.MONGODB_USERNAME;
export const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
export const MONGODB_URI = process.env.MONGODB_URI;
export const PORT = process.env.PORT || 8000;