import express, { Router } from "express";
import globalRouter from "./globalRouter";


const router = Router();

router.use(globalRouter);

//Initialization du router express


//déclaration de la route home

router.use(globalRouter);

router.get('/recherche', (request, response) => {
  response.send("Bienvenue sur recherche !");
  });


export default router;