import { announcements, skills } from "../src/data/data";
import { Request, Response } from "express";

export class AllPageController{


     protected request: Request;
      protected response: Response;
    
      constructor(request: Request, response: Response) {
        this.request = request;
        this.response = response;
    }
   
    public Allpage(){
    const allannounce = [...announcements]
    .map(annonce => ({
        ...annonce,
        skillNames: (annonce.skills || []).map(id => {
          const skill = skills.find(skill => skill.id === id);
          return skill ? skill.name : "Inconnu";
        }),
      }));

  

    this.response.render("./allpage", {
      announcements: allannounce,
    total: allannounce.length,
    });
  }
}


