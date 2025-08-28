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
  const detailannonce = announcements.filter(detailannonce => detailannonce.id === detailId);
 
console.log(detailannonce);



    this.response.render('detailPage',{
detailannonce,





    });}}
