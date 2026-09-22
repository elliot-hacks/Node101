import mongoose, { Schema} from "mongoose"; 


const userSchema = new Schema({
    username : {
        type: String,
        required: true,
        unique: true,
        // lowercase: true,
        trim: true,
        minLength: 3,
        maxLength: 30,
    },
    password : {
        type: String,
        required: true,
        minLength:6,
        maxLength: 100,
    },
    email {
        type: Email,
        required: true,
    },
    },
    {
        timestamps: true,
    }
);


export const User = mongoose.model("User", userSchema);
