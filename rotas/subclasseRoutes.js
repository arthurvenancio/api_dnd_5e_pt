import express from "express";
import SubclasseController from "../controladores/subclasseController.js"

const router = express.Router()

router
    .get("/subclasse",SubclasseController.listarsubclasses)
    .get("/subclasse/:id",SubclasseController.subclassePorId)
    .post("/subclasse",SubclasseController.cadastrarsubclasse)
    .put("/subclasse/:id",SubclasseController.atualizarsubclasse)
    .delete("/subclasse/:id",SubclasseController.excluirsubclasse)

export default router