//Trang chủ và tìm kiếm

const Course = require('../models/Course')

const User = require('../models/User')

const {mutipleMongooseToObject} = require('../../util/mongoose')

class SiteController {
    //GET /home
    home(req, res, next) {
        Course.find({})
            .then(courses => {
                
                res.render('home', { 
                    courses: mutipleMongooseToObject(courses)
                })
            })
            .catch(next)
        
    }
    //GET /search
    search(req, res) {
         res.render('search');
        
    }

    signup(req, res,next) {
        //  res.render('signup');
        User.find({})
            .then(users => { 
                res.render('signup', { 
                    users: mutipleMongooseToObject(users)
                })
            })
            .catch(next)
        
    }

    login(req, res) {
        res.render('login');
    }
    
}




module.exports = new SiteController();
