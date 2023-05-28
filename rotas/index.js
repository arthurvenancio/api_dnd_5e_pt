import express from "express";
import classes from "./classeRoutes.js"
import racas from "./racaRoutes.js"
import habilidades from "./habilidadeRoutes.js"
import personagens from "./personagemRoutes.js"

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "Api DnD 5e PT-BR"})
  })

  app.use(
    express.json(),
    classes,
    racas,
    habilidades,
    personagens
  )
}

export default routes