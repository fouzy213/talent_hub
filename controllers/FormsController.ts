import { Request, Response } from "express";
import {announcements,announcementComments,salaryUnits,missionTypes,skills} from "../src/data/data"

export class FormsController{
    

     protected request: Request;
      protected response: Response;
    
      constructor(request: Request, response: Response) {
        this.request = request;
        this.response = response;
}

public createAnnounce(){
this.response.render('formAdd',{announcements,salaryUnits,missionTypes,skills,value:{},error:{}
})
}

public addAnnounce(){


  const {
    titre,
    description,
    skills: skillsSelected,
    typeId,
    startDate,
    salary,
    salaryUnitId,
    companyName,
    companyEmail,
    companyPhone,
    password
  } = this.request.body;


  if (!titre || !description || !skillsSelected || !typeId || !startDate || !salary || !salaryUnitId) {
    return this.response.render('formAdd', {
      announcements,
      salaryUnits,
      missionTypes,
      skills,
      value: this.request.body,
      error: { message: "Tous les champs sont requis." }
    });
  }

 
  const newAnnouncement = {
    id: announcements.length + 101,
    title: titre,
    description: description,
    skills: Array.isArray(skillsSelected) ? skillsSelected.map((s: string) => parseInt(s)) : [parseInt(skillsSelected)],
    typeId: parseInt(typeId),
    startDate: new Date(startDate),
    salary: parseFloat(salary),
    salaryUnitId: parseInt(salaryUnitId),
    companyName,
    companyEmail,
    companyPhone,
    password,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  announcements.push(newAnnouncement);

  
  return this.response.redirect('/'); 
}


}













