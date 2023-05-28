import habilidades from "../modelos/Habilidade.js";

class HabilidadeController{
 
    static listarhabilidades=(req,res)=>{
        habilidades.find((err,habilidades)=>{
            if(err) {
                res.status(400).send({message: `${err.message}`})
              } else {
                res.status(200).send(habilidades);
              }
        })
    }
    static habilidadePorId=(req,res)=>{
        const id =req.params.id

        habilidades.findById(id,(err,habilidades)=>{
            if(err) {
                res.status(400).send({message: `${err.message} - Id de Habilidade não encontrada`})
              } else {
                res.status(200).send(habilidades);
              }
        })
    }
    static cadastrarhabilidade = (req, res) => {
        let habilidade = new habilidades(req.body);
    
        habilidade.save((err) => {   
          if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar Habilidade.`})
          } else {
            res.status(201).send(habilidade.toJSON())
          }
        })
    }
    static atualizarhabilidade = (req, res) => {
    const id = req.params.id;

    habilidades.findByIdAndUpdate(id, {$set: req.body}, (err) => {
        if(!err) {
        res.status(200).send({message: 'Habilidade atualizada com sucesso'})
        } else {
        res.status(500).send({message: err.message})
        }
    })
    }
    static excluirhabilidade = (req, res) => {
        const id = req.params.id;
    
        habilidades.findByIdAndDelete(id, (err) => {
          if(!err){
            res.status(200).send({message: 'Habilidade removida com sucesso'})
          } else {
            res.status(500).send({message: err.message})
          }
        })
    }
    static listarHabilidadeporChave = (req, res) => {
        const chave_busca = req.query.chave_busca
        const valor_busca = req.query.valor_busca
    
        habilidades.find({chave_busca: valor_busca}, {}, (err, habilidades) => {
          res.status(200).send(habilidades);
    
        })
      }
}

export default HabilidadeController