//Khoá học của tôi
const Course = require('../models/Course')
const {mutipleMongooseToObject} = require('../../util/mongoose')

class MeControllers {
    //GET /me/stored/sourse
    storedCourses(req, res, next) {
        Course.find({})
            .then(courses => res.render('me/stored-courses', {
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next);
    }
}

module.exports = new MeControllers();
