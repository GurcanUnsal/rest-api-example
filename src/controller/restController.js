import mongoose from "mongoose";

import { EmployeeSchema } from "../model/restModel.js";

const Employee = mongoose.model("Employee", EmployeeSchema);

export const addEmployee = async (req, res) => {
    let newEmployee = new Employee(req.body);

    await newEmployee.save();
    console.log(newEmployee);
}

export const getEmployees = async (req, res) => {
    let employees = await Employee.find({});

    console.log(employees);
}

export const updateEmployeeById = async (req, res) => {
    await Employee.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
    console.log("updated");
}

export const deleteEmployeeById = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
}