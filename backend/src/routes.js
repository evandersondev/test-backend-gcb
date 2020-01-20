const { Router } = require("express");
const routes = Router();
const DoctorController = require("./controllers/DoctorController");

routes.get("/doctors", DoctorController.index);
routes.post("/doctors", DoctorController.store);
routes.put("/doctors/:id", DoctorController.update);
routes.delete("/doctors/:id", DoctorController.destroy);

module.exports = routes;
