import mongoose from "mongoose";

const personagemSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {type: String, required: true},
    raca:{type:mongoose.Schema.Types.ObjectId, ref:'Racas',required:true},
    classe:{type:mongoose.Schema.Types.ObjectId, ref:'Classes',required:true},
    subclasse:{type:mongoose.Schema.Types.ObjectId, ref:'Subclasses'},
    nivel:{type:Number,required:true},
    atributos:{type:Object, required:true},
    proficiencias:{type:Object, required:true},
    habilidades:{type:Array, required:true}
  },
)

const personagens = mongoose.model("Personagens", personagemSchema)

export default personagens;