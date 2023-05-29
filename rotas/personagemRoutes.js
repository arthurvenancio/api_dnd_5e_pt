import express from "express";
import PersonagemController from "../controladores/personagemController.js";

const router = express.Router()

router
    .get("/personagens",PersonagemController.listarpersonagens)
    .get("/personagens/:id",PersonagemController.personagemPorId)
    .post("/personagens",PersonagemController.cadastrarpersonagem)
    .put("/personagens/:id",PersonagemController.atualizarpersonagem)
    .delete("/personagens/:id",PersonagemController.excluirpersonagem)

export default router