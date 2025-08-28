import { Router } from "express";
import { DetailController } from "../controllers/DetailController";
const announceRouter = Router();

announceRouter.get("/detail/:id", (request, response) => {
  const controller = new DetailController(request, response);
controller.detailPage();
});




export default announceRouter;
