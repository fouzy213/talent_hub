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

// Déclaration de la route 'contact'
globalRouter.get("/allpage", (request, response) => {
  const controller = new AllPageController(request, response);
  controller.Allpage;
});

// // Déclaration de la route 'à propos'
// globalRouter.get("/about", (request, response) => {
//   const controller = new GlobalController(request, response);
//   controller.about();
// });

export default globalRouter;
