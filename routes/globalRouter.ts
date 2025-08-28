import { Router } from "express";
import { GlobalController } from "../controllers/GlobalController";
import { AllPageController } from "../controllers/AllPageController";
// Initialiastion du bookRouter Express
const globalRouter = Router();

// Déclaration de la route 'homepage'
globalRouter.get("/", (request, response) => {
  const controller = new GlobalController(request, response);
  controller.homepage();
});

// Déclaration de la route de toutes les annonces.
globalRouter.get("/allpage", (request, response) => {
  const controller = new AllPageController(request, response);
  controller.Allpage();
});



export default globalRouter;
