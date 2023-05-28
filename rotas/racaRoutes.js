import express from "express";
import RacaController from "../controladores/racaController.js";

const router = express.Router()

router
    .get("/racas",RacaController.listarRacas)
    .get("/racas/:id",RacaController.racaPorId)
    .post("/racas",RacaController.cadastrarRaca)
    .put("/racas/:id",RacaController.atualizarRaca)
    .delete("/racas/:id",RacaController.excluirRaca)

export default router
