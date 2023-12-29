//Giới thiệu
class NewsControllers {
    //GET /news
    index(req, res) {
        res.render('news');
    }

    //GET /news/mota
    show(req, res) {
        res.send('NEW DETAIl');
    }
}

module.exports = new NewsControllers();
