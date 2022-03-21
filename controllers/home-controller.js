class HomeController {

    renderIndex(req, res) {
        res.render('index', { title: 'Express' });
    }
}

const homeController = new HomeController();

module.exports = homeController;