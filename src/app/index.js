import angular from 'angular';
import angularGrid from 'angulargrid';

import './css/styles.css';
import MainController from './controllers/MainController.js';
import DataService from './services/DataService.js';

const MODULE_NAME = 'ImagesFavApp'

angular.module(MODULE_NAME, [angularGrid])
    .controller('MainController', MainController)
    .service('DataService', DataService)
    .run(DataService => {
        DataService.getPhotos();
    })

export default MODULE_NAME
