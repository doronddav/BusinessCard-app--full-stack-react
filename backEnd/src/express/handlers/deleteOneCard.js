const operations =  require('../../mongoose/cardOperations');


async function deleteOneCard(req,res){

     const result =     await   operations.deleteOneCardById(req.query.id);
       if(result==null)
       {
            return res.status(500).json('card wasnt deleted');
       }
       return res.json(req.query.id + ' Deleted from DB');
}

module.exports= deleteOneCard;