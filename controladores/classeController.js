import classes from "../modelos/Classe.js";

class ClasseController{
 
    static listarclasses=(req,res)=>{
        classes.find((err,classes)=>{
            if(err) {
                res.status(400).send({message: `${err.message}`})
              } else {
                res.status(200).send(classes);
              }
        })
    }
    static classePorId=(req,res)=>{
        const id =req.params.id

        classes.findById(id,(err,classes)=>{
            if(err) {
                res.status(400).send({message: `${err.message} - Id de Classe não encontrada`})
              } else {
                res.status(200).send(classes);
              }
        })
    }
    static cadastrarclasse = (req, res) => {
        let classe = new classes(req.body);
    
        classe.save((err) => {   
          if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar Classe.`})
          } else {
            res.status(201).send(classe.toJSON())
          }
        })
    }
    static atualizarclasse = (req, res) => {
    const id = req.params.id;

    classes.findByIdAndUpdate(id, {$set: req.body}, (err) => {
        if(!err) {
        res.status(200).send({message: 'Classe atualizada com sucesso'})
        } else {
        res.status(500).send({message: err.message})
        }
    })
    }
    static excluirclasse = (req, res) => {
        const id = req.params.id;
    
        classes.findByIdAndDelete(id, (err) => {
          if(!err){
            res.status(200).send({message: 'Raça removida com sucesso'})
          } else {
            res.status(500).send({message: err.message})
          }
        })
    }
}

export default ClasseController