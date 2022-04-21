const PhotoController = require('../controllers/photo.controller');

module.exports = (app) => {
    app.get('/api/photos', PhotoController.findAllPhotos);

    app.post('/api/photos', PhotoController.createPhoto);

    app.put('/api/photo/:id', PhotoController.updatePhoto);

    app.delete('/api/photo/:id', PhotoController.deleteOnePhoto);

    app.get('/api/photo/:id', PhotoController.findOnePhoto);
}