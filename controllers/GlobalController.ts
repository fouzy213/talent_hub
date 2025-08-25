import { Request, Response} from "express";
export class GlobalController { 
    protected request : Request; 
    protected response: Response;

    constructor(request: Request, response: Response){
        this.request = request; 
        this.response = response; 
    }

    public homepage(){
        this.response.render('./homepage',{
            
});}

    // public error_404(){
    //     this.response.render('../errors/404');
    // }



}