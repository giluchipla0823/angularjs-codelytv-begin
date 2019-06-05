class MainController{
    constructor(DataService){
        this.data = DataService;
        console.log('load main controller');
    }
}

MainController.$inject = ['DataService']

export default MainController;