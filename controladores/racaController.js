import racas from "../modelos/Raca.js";

class RacaController{
 
    static listarRacas=(req,res)=>{
        racas.find((err,racas)=>{
            if(err) {
                res.status(400).send({message: `${err.message}`})
              } else {
                res.status(200).send(racas);
              }
        })
    }
    static racaPorId=(req,res)=>{
        const id =req.params.id

        racas.findById(id,(err,racas)=>{
            if(err) {
                res.status(400).send({message: `${err.message} - Id de Raça não encontrada`})
              } else {
                res.status(200).send(racas);
              }
        })
    }
    static cadastrarRaca = (req, res) => {
        let raca = new racas(req.body);
    
        raca.save((err) => {   
          if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar Raça.`})
          } else {
            res.status(201).send(raca.toJSON())
          }
        })
    }
    static atualizarRaca = (req, res) => {
    const id = req.params.id;

    racas.findByIdAndUpdate(id, {$set: req.body}, (err) => {
        if(!err) {
        res.status(200).send({message: 'Raça atualizada com sucesso'})
        } else {
        res.status(500).send({message: err.message})
        }
    })
    }
    static excluirRaca = (req, res) => {
        const id = req.params.id;
    
        racas.findByIdAndDelete(id, (err) => {
          if(!err){
            res.status(200).send({message: 'Raça removida com sucesso'})
          } else {
            res.status(500).send({message: err.message})
          }
        })
    }
}

export default RacaController