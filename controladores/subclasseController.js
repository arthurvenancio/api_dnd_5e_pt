import subclasses from "../modelos/Subclasse.js";

class SubclasseController{
 
    static listarsubclasses=(req,res)=>{
        subclasses.find()
        .populate('classe','nome')
        .exec((err,subclasses)=>{
            if(err) {
                res.status(400).send({message: `${err.message}`})
              } else {
                res.status(200).send(subclasses);
              }
        })
    }
    static subclassePorId=(req,res)=>{
        const id =req.params.id

        subclasses.findById(id)
        .populate('classe','nome')
        .exec((err,subclasses)=>{
            if(err) {
                res.status(400).send({message: `${err.message} - Id de Subclasse não encontrada`})
              } else {
                res.status(200).send(subclasses);
              }
        })
    }
    static cadastrarsubclasse = (req, res) => {
        let subclasse = new subclasses(req.body);
    
        subclasse.save((err) => {   
          if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar Subclasse.`})
          } else {
            res.status(201).send(subclasse.toJSON())
          }
        })
    }
    static atualizarsubclasse = (req, res) => {
    const id = req.params.id;

    subclasses.findByIdAndUpdate(id, {$set: req.body}, (err) => {
        if(!err) {
        res.status(200).send({message: 'Subclasse atualizada com sucesso'})
        } else {
        res.status(500).send({message: err.message})
        }
    })
    }
    static excluirsubclasse = (req, res) => {
        const id = req.params.id;
    
        subclasses.findByIdAndDelete(id, (err) => {
          if(!err){
            res.status(200).send({message: 'Subclasse removida com sucesso'})
          } else {
            res.status(500).send({message: err.message})
          }
        })
    }
}

export default SubclasseController