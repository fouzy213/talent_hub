import { request, response, Router } from "express";
import { DetailController } from "../controllers/DetailController";
const announceRouter = Router();

announceRouter.get("/detail/:id", (request, response) => {
  const controller = new DetailController(request, response);
controller.detailPage();
});

announceRouter.get("/delete/:id", (req, res) => {
  new DetailController(req, res).deletePage();
});




announceRouter.post("/delete/:id",(request,response)=>{
  const controller = new DetailController(request,response);
  controller.deleteAnnounce();
}


)
export default announceRouter;
