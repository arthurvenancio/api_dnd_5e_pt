import mongoose from "mongoose";

mongoose.connect('mongodb+srv://arthur:teste@cluster0.bvzog.mongodb.net/api_dnd_5e')

let db = mongoose.connection

export default db