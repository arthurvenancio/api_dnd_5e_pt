import express from "express";
import ClasseController from "../controladores/classeController.js";

const router = express.Router()

router
    .get("/classes",ClasseController.listarclasses)
    .get("/classes/:id",ClasseController.classePorId)
    .post("/classes",ClasseController.cadastrarclasse)
    .put("/classes/:id",ClasseController.atualizarclasse)
    .delete("/classes/:id",ClasseController.excluirclasse)

export default router