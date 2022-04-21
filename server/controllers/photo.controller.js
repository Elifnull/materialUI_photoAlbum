const Photo = require('../models/photos.model');

module.exports.findAllPhotos = (request, response) =>{
    Photo.find({})
        .then( foundPhotos =>{
            console.log(foundPhotos);
            response.json(foundPhotos);
        })
        .catch( error =>{
            console.log(error);
            response.json({message: "find all failed", error: error})
        });
}

module.exports.findOnePhoto = (request, response) =>{
    Photo.findById({_id: request.params.id }) //remember to have :id in routes for this request, the _id is for mongoose to interpret
        .then( foundPhoto =>{
            console.log(foundPhoto);
            response.json(foundPhoto);
        })
        .catch(error =>{
            console.log(error)
            response.json({message: "found one failed", error: error})
        });
}

module.exports.createPhoto = (request, response) =>{
    Photo.create(request.body)
        .then(newPhoto =>{
            console.log(newPhoto);
            response.json(newPhoto);
        })
        .catch(error =>{
            console.log(error);
            response.status(400).json(error);
        })
}

module.exports.deleteOnePhoto = (request,response) => {
    Photo.deleteOne({_id: request.params.id})
        .then(deletedPhoto => {
            response.json(deletedPhoto)
        })
        .catch( error => response.status(400).json(error));
}

module.exports.updatePhoto = (request, response) => {
    Photo.findOneAndUpdate({_id: request.params.id},
        request.body,
        {new: true, runValidators: true}
        )
        .then(updatedPhoto => {
            console.log(updatedPhoto);
            response.json(updatedPhoto);
        })
        .catch( error => {
            response.status(400).json(error);
        })
}