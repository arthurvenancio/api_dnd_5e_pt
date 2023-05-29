import mongoose from "mongoose";

const classeSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {type: String, required: true},
    saves: {type: Array, required: true},
    proficiencias: {type: Array, required: true},
    numero_proficiencias: {type: Number, required: true},
    dado_vida:{type:String,required: true},
    nivel_subclasse:{type:Number,required: true}
  },
)

const classes = mongoose.model("Classes", classeSchema)

export default classes;