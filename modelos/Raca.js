import mongoose from "mongoose";

const racaSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {type: String, required: true},
    velocidade_base:{type:Number, required: true},
    velocidade_ar:{type:Number},
    velocidade_agua:{type:Number},
  },
)

const racas = mongoose.model("Racas", racaSchema)

export default racas;