import { Router } from "express";
import { GlobalController } from "../controllers/GlobalController";

// Initialiastion du bookRouter Express
const globalRouter = Router();

// Déclaration de la route 'homepage'
globalRouter.get("/", (request, response) => {
  const controller = new GlobalController(request, response);
  controller.homepage();
});

// // Déclaration de la route 'contact'
// globalRouter.get("/contact", (request, response) => {
//   const controller = new GlobalController(request, response);
//   controller.contact();
// });

// // Déclaration de la route 'à propos'
// globalRouter.get("/about", (request, response) => {
//   const controller = new GlobalController(request, response);
//   controller.about();
// });

export default globalRouter;
