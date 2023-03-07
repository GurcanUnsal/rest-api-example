import {
  getEmployees,
  addEmployee,
  updateEmployeeById,
  deleteEmployeeById,
} from "../controller/restController.js";

const allRoutes = (app) => {
  app.route("/api/employees").get(getEmployees).post(addEmployee);

  app
    .route("/api/employees/:id")
    .put(updateEmployeeById)
    .delete(deleteEmployeeById);
};

export default allRoutes;
