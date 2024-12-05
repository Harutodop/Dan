import express from "express";
import home_Controller from "../controllers/home_Controller";

let router = express.Router();

let initWebRoutes = (app) => {

    router.get('/crud', home_Controller.getCRUD);
    router.post('/post-crud', home_Controller.portCRUD);
    router.get('/get-crud' , home_Controller.displayGETCRUD);
    router.get('/edit-crud', home_Controller.getEditCRUD);

    router.post('/put-crud', home_Controller.putCRUD);
    router.get('/delete-crud', home_Controller.deleteCRUD);


    return app.use("/", router);
}

module.exports = initWebRoutes;