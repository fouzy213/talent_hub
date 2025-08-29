import express, { Router } from "express";
import globalRouter from "./globalRouter";
import announceRouter from "./announceRouter";
import formRouter from "./formRouter";
const router = Router();

router.use(globalRouter);

router.use(announceRouter)
//Initialization du router express

router.use(formRouter)
//déclaration de la route home


router.get('/recherche', (request, response) => {
  response.send("Bienvenue sur recherche !");
  });


export default router;