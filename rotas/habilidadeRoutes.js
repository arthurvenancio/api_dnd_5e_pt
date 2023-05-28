import express from "express";
import HabilidadeController from "../controladores/habilidadeController.js";

const router = express.Router();

router
  .get("/habilidades", HabilidadeController.listarhabilidades)
  .get("/habilidades/busca", HabilidadeController.listarHabilidadeporChave)
  .get("/habilidades/:id", HabilidadeController.habilidadePorId)
  .post("/habilidades", HabilidadeController.cadastrarhabilidade)
  .put("/habilidades/:id", HabilidadeController.atualizarhabilidade)
  .delete("/habilidades/:id", HabilidadeController.excluirhabilidade)

export default router;   