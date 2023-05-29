import personagens from "../modelos/Personagem.js";

class PersonagemController{
 
    static listarpersonagens=(req,res)=>{
        personagens.find()
        .populate('classe','nome')
        .populate('subclasse','nome')
        .populate('raca','nome')
        .exec((err,personagens)=>{
            if(err) {
                res.status(400).send({message: `${err.message}`})
              } else {
                res.status(200).send(personagens);
              }
        })
    }
    static personagemPorId=(req,res)=>{
        const id =req.params.id

        personagens.findById(id)
        .populate('classe','nome')
        .populate('subclasse','nome')
        .populate('raca','nome')
        .exec((err,personagens)=>{
            if(err) {
                res.status(400).send({message: `${err.message} - Id de Personagem não encontrada`})
              } else {
                res.status(200).send(personagens);
              }
        })
    }
    static cadastrarpersonagem = (req, res) => {
        let personagem = new personagens(req.body);
    
        personagem.save((err) => {   
          if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar Personagem.`})
          } else {
            res.status(201).send(personagem.toJSON())
          }
        })
    }
    static atualizarpersonagem = (req, res) => {
    const id = req.params.id;

    personagens.findByIdAndUpdate(id, {$set: req.body}, (err) => {
        if(!err) {
        res.status(200).send({message: 'Personagem atualizada com sucesso'})
        } else {
        res.status(500).send({message: err.message})
        }
    })
    }
    static excluirpersonagem = (req, res) => {
        const id = req.params.id;
    
        personagens.findByIdAndDelete(id, (err) => {
          if(!err){
            res.status(200).send({message: 'Personagem removida com sucesso'})
          } else {
            res.status(500).send({message: err.message})
          }
        })
    }
}

export default PersonagemController