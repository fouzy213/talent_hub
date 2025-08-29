import { Request, Response } from "express";
import {announcements,announcementComments,salaryUnits,missionTypes,skills} from "../src/data/data"
export class DetailController{


     protected request: Request;
      protected response: Response;
    
      constructor(request: Request, response: Response) {
        this.request = request;
        this.response = response;
    }
    public detailPage(){


    const detailId = parseInt(this.request.params.id);
 const detailannonce = announcements.find(a => a.id === detailId);




this.response.render('detailPage', { detailannonce ,skills,missionTypes,salaryUnits,announcementComments});


;

}

  public deletePage() {
    const id = parseInt(this.request.params.id);
    const annonce = announcements.find(a => a.id === id);

    if (!annonce) return this.response.status(404).send("Annonce non trouvée");

    this.response.render("deletePage", { annonce });
  }

 
  public deleteAnnounce() {
    const id = parseInt(this.request.params.id);
    const index = announcements.findIndex(a => a.id === id);

    if (index !== -1) {
      announcements.splice(index, 1);
      this.response.redirect("/"); 
    } else {
      this.response.status(404).send("Annonce non trouvée");
    }
  }
}