import mongoose from "mongoose";

const subclasseSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {type: String, required: true},
    classe:{type:mongoose.Schema.Types.ObjectId, ref: 'Classes', required: true}
  },
)

const subclasses = mongoose.model("Subclasses", subclasseSchema)

export default subclasses;