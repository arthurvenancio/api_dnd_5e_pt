import mongoose from "mongoose";

const habilidadeSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {type: String, required: true},
    origem: {type: String, required: true},
    nivel_base:{type:Number, required: true},
    descricao: {type: String, required: true},
    rolagem:{type:String},
    modificador:{type:String},
    evolucao:{type:Object},
  },
)

const habilidades = mongoose.model("Habilidades", habilidadeSchema)

export default habilidades;