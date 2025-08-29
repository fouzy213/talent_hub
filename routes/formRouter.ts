import { request, response, Router } from "express";
import { FormsController } from "../controllers/FormsController";
// // Add GET - afficher le formulaire
const formRouter = Router()
formRouter.get("/add",(request,response)=>{
const controller =new FormsController(request,response);
controller.createAnnounce();
});

formRouter.post("/add", (request, response) => {
  const controller = new FormsController(request, response);
  controller.addAnnounce();
});



export default formRouter