import { Request, Response } from "express";
import { announcements, skills } from "../src/data/data";

export class GlobalController {
  protected request: Request;
  protected response: Response;

  constructor(request: Request, response: Response) {
    this.request = request;
    this.response = response;
  }

  public homepage() {
    const lastannouce = [...announcements]
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, 3)
      .map(annonce => ({
        ...annonce,
        skillNames: (annonce.skills || []).map(id => {
          const skill = skills.find(skill => skill.id === id);
          return skill ? skill.name : "Inconnu";
        }),
      }));

  

    this.response.render("./homepage", {
      announcements: lastannouce,
    });
    
    
    
  }
  public allPage(){
    this.response.render("./allpage", {
      announcements
    });
  }
}
