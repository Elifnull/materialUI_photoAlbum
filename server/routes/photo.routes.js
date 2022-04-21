const PhotoController = require('../controllers/photo.controller');

module.exports = (app) => {
    app.get('/api/photos', PhotoController.findAllPhotos);

    app.post('/api/photos', PhotoController.createPhoto);

    app.put('/api/photos/:id', PhotoController.updatePhoto);

    app.delete('/api/photos/:id', PhotoController.deleteOnePhoto);

    app.get('/api/photos/:id', PhotoController.findOnePhoto);
}