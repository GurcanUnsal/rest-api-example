import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const EmployeeSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    age: {
        type: Number
    }
});